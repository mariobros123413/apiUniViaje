import { Router } from 'express';
import { getVehiculo } from "../controllers/vehiculo.CO.js";

const vehiculo = Router();

vehiculo.get('/api/vehiculo/:id', getVehiculo);
// usuario.get('/api/usuario',getUsuarios);
export default vehiculo;