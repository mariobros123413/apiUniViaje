import { Router } from 'express';
import { createUsuario, getUsuario, getUsuarios } from "../controllers/usuario.CO.js";

const usuario = Router();

usuario.get('/api/usuario/:nroregistro', getUsuario);
usuario.post('/api/usuariocreate/:nroregistro', createUsuario);

// usuario.get('/api/usuario',getUsuarios);
export default usuario;

