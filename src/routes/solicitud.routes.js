import { Router } from 'express';
import { createSolicitud } from "../controllers/solicitud.CO.js";
const solicitud = Router();

solicitud.post('/api/solicitud/:idusuariopasajero/:idruta', createSolicitud);

export default solicitud;