import axios from "axios";
const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post('https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        });
        console.log('Registro existoso: ', respuesta.data);
    } catch (error) {
        console.error('Error en el registro: ', error.respuesta.data);
    }
};
registrarUsuario();