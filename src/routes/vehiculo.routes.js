import { Router } from 'express';
import { getVehiculo , updateVehiculo, createVehiculo, deleteVehiculo} from "../controllers/vehiculo.CO.js";

const vehiculo = Router();

vehiculo.get('/api/vehiculo/:idusuario', getVehiculo);
vehiculo.put('/api/vehiculo/:idusuario', updateVehiculo);
vehiculo.post('/api/vehiculocreate/:idusuario', createVehiculo);
vehiculo.delete('/api/vehiculo/:idusuario', deleteVehiculo);

// usuario.get('/api/usuario',getUsuarios);
export default vehiculo;