import { Router } from 'express';
import { getUsuario, getUsuarios } from "../controllers/usuario.CO.js";

const usuario = Router();

usuario.get('/api/usuario/:nroregistro', getUsuario);
// usuario.get('/api/usuario',getUsuarios);
export default usuario;

