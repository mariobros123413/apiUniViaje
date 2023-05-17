// primero se importa router
import {Router} from "express"
import { createUbicacion, getUbicaciones } from "../controllers/Ubicaion.CO.js"

// se lo pone en una constante para poder usarlo

const ubi = Router()

// ya puedes comenzar a crear rutas

ubi.get('/ubicaciones',getUbicaciones)
ubi.post('/ubicaciones',createUbicacion)
ubi.put('')
ubi.delete('')



// ahora hay que exportarlo 


export default ubi