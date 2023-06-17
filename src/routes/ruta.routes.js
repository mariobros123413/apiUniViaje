import { Router } from 'express';
import { getRuta, getRutas, createRuta, deleteRuta, updateAsientos,updateEstado } from "../controllers/ruta.CO.js";

const ruta = Router();

ruta.get('/api/ruta/:id', getRuta);
ruta.get('/api/rutas', getRutas);
ruta.post('/api/ruta/:idusuarioconductor', createRuta);
ruta.delete('/api/ruta/:id', deleteRuta);
ruta.put('/api/ruta/estado/:id', updateEstado);
ruta.put('/api/ruta/asientos/:id', updateAsientos);

export default ruta;