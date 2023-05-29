import { Router } from "express";

import {createActivo,deleteActivo,getActivobyID,getActivobySerial,getActivos,getGarActivo,getUbiActivo, updateActivo, createReserva }from "../controllers/activo.CO.js"

const activo = Router();

activo.get('/api/acti', getActivos)

activo.get('/api/acti/:id', getActivobyID)

activo.get('/api/Gacti',getGarActivo)

activo.get('/api/Gactivo',getUbiActivo)

activo.get('/api/acti/:serial', getActivobySerial)

activo.post('/api/acti', createActivo)

activo.put('/api/acti/:id', updateActivo)

activo.delete('/api/acti/:id', deleteActivo)

activo.post('/api/acti', createReserva)

export default activo;