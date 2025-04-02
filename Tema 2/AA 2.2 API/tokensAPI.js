import axios from 'axios';

// Firebase Authentication API Key
const API_KEY = 'AIzaSyCJqrDG40IgnW_ORGkEPDUo96oesyRgaCg';

// URL para la autenticación con Firebase
const API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

// Las credenciales del usuario ya creado en Firebase
const credentials = {
    email: 'usuario@ejemplo.com',    // Correo del usuario
    password: 'contraseña123',        // Contraseña del usuario
    returnSecureToken: true           // Indicamos que queremos un token
};

async function loginFirebase() {
    try {
        const response = await axios.post(API_URL, credentials);
        console.log('✅ Token obtenido:', response.data.idToken);
        return response.data.idToken;  
    } catch (error) {
        console.error('❌ Error al iniciar sesión:', error.response?.data || error.message);
    }
}

// URL de verificación del token
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;

async function getUserDataFromToken(token) {
    try {
        const response = await axios.post(URL, {
            idToken: token  // Enviamos el token JWT para obtener la información
        });
        console.log('Datos del usuario:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al verificar el token:', error.response?.data || error.message);
    }
}

// 1. Enviar usuario y contraseña en una petición POST
loginFirebase()
    .then(token => {
        // 2. Usar el token en el encabezado para acceder a los datos protegidos
        getUserDataFromToken(token);
        // 3. Probar con un token inválido
        getUserDataFromToken('tokenInvalido');
    })
    .catch(error => {
        console.error('Error en el proceso de login:', error);
    });