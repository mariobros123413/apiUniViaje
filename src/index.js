import express from 'express'
import bodyParser from "body-parser"
import morgan from "morgan"

import auth from './routes/auth.routes.js'
import usuario from './routes/usuario.routes.js'
const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(auth)
app.use(usuario)
app.listen(process.env.PORT||3000)//asd
