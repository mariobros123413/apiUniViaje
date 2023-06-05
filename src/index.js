import express from 'express'
import bodyParser from "body-parser"
import morgan from "morgan"

import auth from './routes/auth.routes.js'
<<<<<<< HEAD
import usuario from './routes/usuario.routes.js'
=======
>>>>>>> f822ea2938880295f1b9f87b4a384ed1c2fcf100
const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(auth)
<<<<<<< HEAD
app.use(usuario)
=======
>>>>>>> f822ea2938880295f1b9f87b4a384ed1c2fcf100
app.listen(process.env.PORT||3000)
