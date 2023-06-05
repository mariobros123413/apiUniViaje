import { consul } from '../db.js';

export const getUsuario = async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM usuario where nroregistro=$1', [req.params.nroregistro])
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR en tab")
    }
}

export const getUsuarios= async (req, res) => {
    try {
        const resp = await consul.query('SELECT * FROM usuario ')
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR")
    }
}