import { Router } from 'express';
import { getBrevet , updateBrevet, createBrevet, deleteBrevet} from "../controllers/brevet.CO.js";

const brevet = Router();

brevet.get('/api/brevet/:id', getBrevet);
brevet.put('/api/brevet/:id', updateBrevet);
brevet.post('/api/brevetcreate/:id', createBrevet);
brevet.delete('/api/brevet/:id', deleteBrevet);

// usuario.get('/api/usuario',getUsuarios);
export default brevet;