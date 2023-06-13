import { consul } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const { nroregistro, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const query = 'SELECT * FROM usuario WHERE nroregistro = $1';
    const result = await consul.query(query, [parseInt(nroregistro)]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const user = result.rows[0];

    // Verificar la contraseña
    const match = await bcrypt.compare(password, user.password);
    //const penc = await bcrypt.hash(password, 10);
    // console.log(penc);
    if (!match) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar el token de autenticación
    const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};



export const register = async (req, res) => {
    try {
      const { nroregistro, password, correo, nombre, celular, fotoperfil, carrera, horarioclases, preferenciasviaje } = req.body;
  
      // Verificar si el usuario ya existe en la base de datos
      const query = 'SELECT * FROM usuario WHERE nroregistro = $1';
      const result = await consul.query(query, [parseInt(nroregistro)]);
  
      if (result.rows.length > 0) {//as
        return res.status(409).json({ message: 'El usuario ya está registrado' });
      }
  
      // Generar el hash de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insertar el nuevo usuario en la base de datos
      const insertQuery = 'INSERT INTO usuario (nroregistro, password, correo, nombre, celular, fotoperfil, carrera, horarioclases, preferenciasviaje) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
      await consul.query(insertQuery, [nroregistro, hashedPassword, correo, nombre, celular, fotoperfil, carrera, horarioclases, preferenciasviaje]);
  
      res.status(200).json({ message: 'Registro exitoso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
  

