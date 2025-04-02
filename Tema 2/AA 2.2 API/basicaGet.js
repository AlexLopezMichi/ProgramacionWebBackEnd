import axios from "axios";
const obtenerUsuarios = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users/4', {
            headers: {
                'Authorization': 'Basic ' + Buffer.from('eve.holt@fallos.in:mala').toString('base64')
            }
        });
        console.log('Datos del usuario: ', response.data);
    } catch (error) {
        console.error('Error al obtener los datos del usuario: ', error.response.data);
    }
};
obtenerUsuarios();