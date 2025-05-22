import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/**
 * Ruta principal que responde con un mensaje de bienvenida.
 */
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD sin Mongoose');
});

// Obtiene la URI de conexión desde las variables de entorno
const uri = process.env.uri;
const client = new MongoClient(uri);
let usuariosCollection;

/**
 * Función asíncrona para conectar a la base de datos.
 * Si la conexión es exitosa, inicia el servidor Express.
 */
async function conectarDB() {
    try {
        await client.connect();
        const db = client.db('test');
        usuariosCollection = db.collection('usuarios');
        console.log('Conexión exitosa a la base de datos');

        // Iniciar servidor solo después de conectar
        app.listen(port, () => {
            console.log(`Servidor ejecutándose en http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

conectarDB();

// ================== Rutas CRUD ==================

/**
 * Ruta para crear un nuevo usuario.
 * Valida los campos requeridos y verifica si el correo ya existe.
 */
app.post('/usuarios', async (req, res) => {
    try {
        const { nombre, edad, correo } = req.body;

        // Validación de campos requeridos
        if (!nombre || !edad || !correo) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        // Verifica si el correo ya está registrado
        const existente = await usuariosCollection.findOne({ correo });
        if (existente) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Inserta el nuevo usuario
        const resultado = await usuariosCollection.insertOne({
            nombre,
            edad,
            correo,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.status(201).json(resultado);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

/**
 * Ruta para obtener todos los usuarios.
 */
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await usuariosCollection.find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

/**
 * Ruta para obtener un usuario por su ID.
 */
app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuariosCollection.findOne({ _id: new ObjectId(id) });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

/**
 * Ruta para actualizar un usuario por su ID.
 * Actualiza los campos enviados en el cuerpo de la petición.
 */
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const actualizacion = {
            ...req.body,
            updatedAt: new Date(),
        };

        // Actualiza el usuario con el id proporcionado usando los datos enviados en el cuerpo de la petición
        const resultado = await usuariosCollection.updateOne(
            { _id: new ObjectId(id) }, // Filtro por el id del usuario
            { $set: actualizacion }    // Establece los nuevos valores
        );

        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuarioActualizado = await usuariosCollection.findOne({ _id: new ObjectId(id) });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

/**
 * Ruta para eliminar un usuario por su ID.
 */
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await usuariosCollection.deleteOne({ _id: new ObjectId(id) });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});