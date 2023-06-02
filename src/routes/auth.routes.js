// import { Router } from "express";

// import { login } from "../controllers/auth.CO.js";

// const log = Router();

// log.post('/api/log', login)

// export default log;

import { Router } from 'express';
import { login, register } from "../controllers/auth.CO.js";

const log = Router();

// Ruta para iniciar sesión
log.post('/api/login', login);
log.post('/api/register', register);
export default log;
