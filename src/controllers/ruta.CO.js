import { consul } from '../db.js';

export const getRuta = async (req, res) => {
    try {
      const resp = await consul.query('SELECT ruta.* , usuario.nombre, usuario.preferenciasviaje, usuario.puntuacion,vehiculo.fotovehiculo FROM ruta, usuario, vehiculo where ruta.idusuarioconductor=usuario.id and usuario.id=vehiculo.idusuario and estado= true', [req.params.id])
      res.status(200).json(resp.rows)
    } catch (error) {
      res.send("AERROR GET RUTA")
    }
}

export const getRutas = async (req, res) => {
    try {
      const resp = await consul.query('SELECT ruta.* , usuario.nombre, usuario.preferenciasviaje, usuario.puntuacion, vehiculo.fotovehiculo FROM ruta, usuario, vehiculo where ruta.idusuarioconductor=usuario.id and usuario.id=vehiculo.idusuario and estado= true and horariosalida < current_timestamp')
      res.status(200).json(resp.rows)
    } catch (error) {
      res.send("AERROR GET RUTAS")
    }
}

export const createRuta = async (req, res) => {
  try {
      const { horariosalida, horarioregreso, paradaintermedia, asientos, trayecto, destino, estado} = req.body
      const ids = req.params.idusuarioconductor; // Agregar esta línea para obtener el valor de idusuario de los parámetros de la URL

      consul.query('INSERT INTO ruta ( idusuarioconductor, horariosalida, horarioregreso, paradaintermedia, asientos, trayecto, destino, estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [ ids, horariosalida, horarioregreso, paradaintermedia, asientos, trayecto, destino, estado])
      // console.log(id, ci, nombre, foto,  catlicencia ,fecexpedicion, fecvencimiento); // Verificar los valores de los parámetros

      res.send('ruta creada')
  } catch (e) {
    console.log(`AExcepción durante la solicitud CREATE RUTA: ${e}`);
  }
}

export const deleteRuta = async (req,res) =>{
  try {
    await consul.query('DELETE FROM ruta WHERE id = $1',[req.params.id])
      res.send(`ruta ${req.params.id} Eliminado`)
  } catch (error) {
      res.send("AERROR DELETE RUTA")
  }
}

export const updateEstado = async (req, res) => {
  try {
    const { estado } = req.body;
    await consul.query('UPDATE ruta SET estado=$1 WHERE id = $2', [estado, req.params.id]);
    res.send(`ruta ${req.params.id} actualizado`);
  //   console.log(req.body);
  } catch (error) {
    res.send("AERROR UPDATE ESTADO");
  }
};

export const updateAsientos = async (req, res) => {
  try {
    const { asientos } = req.body;
    await consul.query('UPDATE ruta SET asientos=$1 WHERE id = $2', [asientos, req.params.id]);
    res.send(`ruta ${req.params.id} actualizado`);
  //   console.log(req.body);
  } catch (error) {
    res.send("AERROR UPDATE ASIENTOS");
  }
};