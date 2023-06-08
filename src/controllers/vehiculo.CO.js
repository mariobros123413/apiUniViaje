import { consul } from '../db.js';

export const getVehiculo = async (req, res) => {
  try {
    const resp = await consul.query('SELECT vehiculo.* FROM vehiculo where vehiculo.idusuario=$1', [req.params.idusuario])
    res.status(200).json(resp.rows)
  } catch (error) {
    res.send("ERROR GET VEHICUL")
  }
}

export const updateVehiculo = async (req, res) => {
  try {
    const { nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales } = req.body;
    await consul.query('UPDATE vehiculo SET nroplaca=$1, modelo=$2, anio=$3, capacidad=$4, fotovehiculo=$5, caracteristicasespeciales=$6 WHERE idusuario = $7', [nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales, req.params.idusuario]);
    res.send(`vehiculo ${req.params.idusuario} actualizado`);
  } catch (error) {
    res.send("ERROR UPDATE VEHICULO");
  }
};

export const createVehiculo = async (req, res) => {
  try {
      const { nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales} = req.body
      const idusuario = req.params.idusuario; // Agregar esta línea para obtener el valor de idusuario de los parámetros de la URL

      consul.query('INSERT INTO vehiculo (idusuario, nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales) VALUES ($1,$2,$3,$4,$5,$6,$7)', [idusuario, nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales])
      console.log(idusuario, nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales); // Verificar los valores de los parámetros

      res.send('Vehiculo registrado')
  } catch (error) {
      res.send("ERROR CREATE VEHICULO")
  }
}

export const deleteVehiculo = async (req,res) =>{
  try {
    await consul.query('DELETE FROM vehiculo WHERE idusuario = $1',[req.params.idusuario])
      res.send(`Vehiculo ${req.params.idusuario} Eliminado`)
  } catch (error) {
      res.send("ERROR DELETE VEHICULO")
  }
}