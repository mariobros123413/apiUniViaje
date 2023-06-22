import { consul } from '../db.js';

export const createSolicitud = async (req, res) => {
    try {
        const { ubicacionrecogida, destino, horadeseadaviaje,aceptacion} = req.body
        const idr = req.params.idruta; // Agregar esta línea para obtener el valor de idusuario de los parámetros de la URL
        const idusu = req.params.idusuariopasajero;
        consul.query('INSERT INTO solicitud (idusuariopasajero,idruta, ubicacionrecogida, destino, horadeseadaviaje,aceptacion) VALUES ($1,$2,$3,$4,$5, $6)', [idusu, idr, ubicacionrecogida, destino, horadeseadaviaje,aceptacion])
        // console.log(id, ci, nombre, foto,  catlicencia ,fecexpedicion, fecvencimiento); // Verificar los valores de los parámetros
  
        res.send('solicitud Aregistrado')
    } catch (e) {
      console.log(`Excepción durante la solicitud: ${e} AcreateSolicitud`);
    }
}

export const getSolicitud = async (req, res) => {
    try {
      const resp = await consul.query('select solicitud.* , usuario. id, usuario.nombre, usuario.fotoperfil, usuario.celular, usuario.preferenciasviaje, usuario.puntuacion from solicitud, usuario where solicitud.idruta=$1 and solicitud.idusuariopasajero = usuario.id', [req.params.idruta]);
      res.status(200).json(resp.rows)
    } catch (error) {
      res.send("AERROR GET SOLICITUD")
    }
}
export const getSolicitudes = async (req, res) => {
    try {
      const resp = await consul.query('select ruta.idusuarioconductor, solicitud.*, usuario. id as usuarioid, usuario.nombre, usuario.fotoperfil, usuario.celular, usuario.preferenciasviaje, usuario.puntuacion from ruta, solicitud, usuario where ruta.idusuarioconductor=$1 and ruta.id= solicitud.idruta and solicitud.idusuariopasajero = usuario.id group by ruta.idusuarioconductor,  solicitud.id, usuario. id, usuario.nombre, usuario.fotoperfil, usuario.celular, usuario.preferenciasviaje, usuario.puntuacion', [req.params.idusuarioconductor]);
      res.status(200).json(resp.rows)
    } catch (error) {
      res.send("AERROR GET SOLICITUDES")
    }
}
export const updateSolicitud = async (req, res) => {
    try {
      const { aceptacion } = req.body;
      await consul.query('UPDATE solicitud SET aceptacion = $1 WHERE idusuariopasajero = $2 and idruta=$3', 
      [aceptacion, req.params.idusuariopasajero, req.params.idruta]);
      res.send(`solicitud ${req.params.idusuariopasajero} actualizado`);
    //   console.log(req.body);
  
    } catch (error) {
      res.send("ERROR UPDATE solicitud");
    }
  };