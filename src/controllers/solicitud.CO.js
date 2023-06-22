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