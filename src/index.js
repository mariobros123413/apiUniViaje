import express from 'express'
import rutas from "./routes/persona.routes.js"
import activo from './routes/activo.routes.js'
import ubi from './routes/ubicacion.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(rutas)
app.use(activo)
app.use(ubi)

app.listen(5000)

console.log("Servidor corriendo en el puerto: 5000")