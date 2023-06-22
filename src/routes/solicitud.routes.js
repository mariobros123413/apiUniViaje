import { Router } from 'express';
import { createSolicitud, getSolicitud, updateSolicitud } from "../controllers/solicitud.CO.js";
const solicitud = Router();

solicitud.post('/api/solicitud/:idusuariopasajero/:idruta', createSolicitud);
solicitud.get('/api/solicitud/:idruta', getSolicitud);
solicitud.put('/api/solicitud/:idusuariopasajero/:idruta',updateSolicitud);
export default solicitud;