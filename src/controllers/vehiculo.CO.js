import { consul } from '../db.js';

export const getVehiculo = async (req, res) => {
    try {
        const resp = await consul.query('SELECT vehiculo.* FROM usuario, vehiculo where usuario.id=vehiculo.idusuario and usuario.id=$1', [req.params.id])
        res.status(200).json(resp.rows)
    } catch (error) {
        res.send("ERROR en tab")
    }
}