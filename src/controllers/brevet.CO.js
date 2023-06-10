import { consul } from '../db.js';

export const getBrevet = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM brevet where id=$1', [req.params.id])
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR GETBREVET")
    }
}

export const updateBrevet = async (req, res) => {
    try {
      const { ci, nombre, catlicencia ,fecexpedicion, fecvencimiento } = req.body;
      await consul.query('UPDATE brevet SET ci=$1, nombre=$2, catlicencia=$3, fecexpedicion=$4, fecvencimiento=$5 WHERE id = $6', 
      [ci, nombre, catlicencia ,fecexpedicion, fecvencimiento, req.params.id]);
      res.send(`brevet ${req.params.id} actualizado`);
    //   console.log(req.body);
  
    } catch (error) {
      res.send("ERROR UPDATE brevet");
    }
  };
  
  export const createBrevet = async (req, res) => {
    try {
        const { id,ci, nombre, foto, fecnacimiento, dirdomicilio, catlicencia ,fecexpedicion, fecvencimiento} = req.body
        const ids = req.params.id; // Agregar esta línea para obtener el valor de idusuario de los parámetros de la URL
  
        consul.query('INSERT INTO brevet (id, ci, nombre, foto, fecnacimiento, dirdomicilio, catlicencia ,fecexpedicion, fecvencimiento) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)', [id, ci, nombre, foto, fecnacimiento, dirdomicilio, catlicencia ,fecexpedicion, fecvencimiento])
        console.log(ids, ci, nombre, foto, fecnacimiento, dirdomicilio, catlicencia ,fecexpedicion, fecvencimiento); // Verificar los valores de los parámetros
  
        res.send('brevet registrado')
    } catch (e) {
      console.log('Excepción durante la solicitud: ');
      console.log(e);
    }
  }
  
  export const deleteBrevet = async (req,res) =>{
    try {
      await consul.query('DELETE FROM brevet WHERE id = $1',[req.params.id])
        res.send(`brevet ${req.params.id} Eliminado`)
    } catch (error) {
        res.send("ERROR DELETE BREVET")
    }
  }