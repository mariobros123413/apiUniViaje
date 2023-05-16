import { Router } from "express";

import {
    getClientes,
    createCliente,
    getClientebyID,
    MUser,
    deleteUser,
    createEmpleado,
    createuser,
    getusuariobyID
} from "../controllers/persona.CO.js"

const rutas = Router();

rutas.get('/api/user', getClientes)

rutas.get('/api/user/:ci', getClientebyID)

rutas.get('/api/usuar/:usuario', getusuariobyID)

rutas.post('/api/user', createCliente)

rutas.post('/api/createuser', createuser)

rutas.post('/api/userE', createEmpleado)

rutas.put('/api/user/:ci', MUser)

rutas.delete('/api/user/:ci', deleteUser)

export default rutas;