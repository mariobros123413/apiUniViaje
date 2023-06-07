import { Router } from 'express';
import { getVehiculo , updateVehiculo} from "../controllers/vehiculo.CO.js";

const vehiculo = Router();

vehiculo.get('/api/vehiculo/:id', getVehiculo);
vehiculo.put('/api/vehiculo/:idusuario', updateVehiculo);
// usuario.get('/api/usuario',getUsuarios);
export default vehiculo;