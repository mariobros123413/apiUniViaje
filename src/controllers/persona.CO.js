import {consul} from "../db.js"

export const getClientes = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM persona,cliente where ci=ciPersona')
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR")
    }
}

export const getEmpleados = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM persona,empleado where ci=ciPersona')
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR")
    }
}

export const getClientebyID = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM persona,cliente where ci = $1 and ci=ciPersona',[req.params.ci])                
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR")
    }
}

export const getusuariobyID = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM persona,administrador where usuario = $1 and ci=ciPersona',[req.params.usuario])                
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR")
    }
}

export const getEmpleadobyID = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM persona,empleado where ci = $1 and ci=ciPersona',[req.params.ci])        
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR")
    }
}

export const createCliente = async (req, res) => {
    try {
        const { ci, nombre, direccion, ciudad, celular, email, descripcion,empresa } = req.body
        consul.query('INSERT INTO persona (ci, nombre, direccion, ciudad, celular, email, descripcion) VALUES ($1,$2,$3,$4,$5,$6,$7)', [ci, nombre, direccion, ciudad, celular, email, descripcion])
        consul.query('INSERT INTO cliente (cipersona,empresa) VALUES ($1,$2)',[ci,empresa])
        res.send('usuario creado')
    } catch (error) {
        res.send("ERROR")
    }
}

export const createuser = async (req, res) => {
    try {
        const {nombre,email,ci,UsuI,Npass} = req.body
        await consul.query('INSERT INTO persona (ci, nombre, email) VALUES ($1,$2,$3)', [ci, nombre, email])
        await consul.query('INSERT INTO administrador (cipersona,usuario,contrasena) VALUES ($1,$2,$3)',[ci,UsuI,Npass])
        res.send('usuario creado')
    } catch (error) {
        res.send("ERROR")
    }
}

export const createEmpleado = async (req, res) => {
    try {
        const { ci, nombre, direccion, ciudad, celular, email, descripcion,empresa } = req.body
        consul.query('INSERT INTO persona (ci, nombre, direccion, ciudad, celular, email, descripcion) VALUES ($1,$2,$3,$4,$5,$6,$7)', [ci, nombre, direccion, ciudad, celular, email, descripcion])
        
        res.send('usuario creado')

        consul.query('INSERT INTO empleado (cipersona) VALUES ($1)',[ci])
    } catch (error) {
        res.send("ERROR")
    }
}

export const deleteUser = async (req,res) =>{
    try {
        const resp = await consul.query('DELETE FROM persona WHERE ci = $1',[req.params.ci])
        res.send(`Usuario ${req.params.ci} Eliminado`)
    } catch (error) {
        res.send("ERROR")
    }
}

export const MUser = async (req,res) => {
    try {
        const { ci, nombre, direccion, ciudad, celular, email, descripcion } = req.body
        const resp = await consul.query('UPDATE persona SET ci = $1,nombre = $2,direccion = $3,ciudad = $4,celular = $5,email = $6,descripcion = $7 WHERE ci = $8 )',[ci, nombre, direccion, ciudad, celular, email, descripcion,req.params.ci])
    } catch (error) {
        res.send("ERROR")
    }
}