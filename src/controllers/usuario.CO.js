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

export const createUsuario = async (req ,res) =>{
    try{
        const { password, correo, nombre, celular, fotoperfil ,carrera, horarioclases, preferenciasviaje} = req.body
        const nroregistros = req.params.nroregistro; // Agregar esta línea para obtener el valor de idusuario de los parámetros de la URL
  
        consul.query('INSERT INTO usuario (nroregistro, password, correo, nombre, celular, fotoperfil ,carrera, horarioclases, preferenciasviaje) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)', [ nroregistros, password, correo, nombre, celular, fotoperfil ,carrera, horarioclases, preferenciasviaje])
        console.log(nroregistros, password, correo, nombre, celular, fotoperfil ,carrera, horarioclases, preferenciasviaje); // Verificar los valores de los parámetros
  
        res.send('usuario registrado')
    } catch (e) {
      console.log('Excepción durante la solicitud createUsuarioA: ');
      console.log(e);
    }
}

export const updateUsuario = async (req, res) => {
    try {
      const { password, correo, nombre, celular, fotoperfil ,carrera, horarioclases, preferenciasviaje } = req.body;
      await consul.query('UPDATE usuario SET password=$1, correo=$2, nombre=$3, celular=$4, fotoperfil=$5, carrera=$6 , horarioclases=$7, preferenciasviaje=$8 WHERE nroregistro = $9', 
      [password, correo, nombre, celular, fotoperfil ,carrera, horarioclases, preferenciasviaje, req.params.nroregistro]);
      res.send(`usuario ${req.params.nroregistro} actualizado`);
    //   console.log(req.body);
  
    } catch (error) {
      res.send("ERROR UPDATE USUARIO");
    }
  };