import { consul } from '../db.js';

export const getVehiculo = async (req, res) => {
    try {
        const resp = await consul.query('SELECT vehiculo.* FROM usuario, vehiculo where usuario.id=vehiculo.idusuario and usuario.id=$1', [req.params.id])
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR en tab")
    }
}

export const updateVehiculo = async (req, res) => {
    try {
      const { nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales} = req.body;
      await consul.query('UPDATE vehiculo SET nroplaca=$1, modelo=$2, anio=$3, capacidad=$4, fotovehiculo=$5, caracteristicasespeciales=$6 WHERE idusuario = $7', [nroplaca, modelo, anio, capacidad, fotovehiculo, caracteristicasespeciales, req.params.idusuario]);
      res.send(`vehiculo ${req.params.idusuario} actualizado`);
    } catch (error) {
      res.send("ERROR");
    }
  };