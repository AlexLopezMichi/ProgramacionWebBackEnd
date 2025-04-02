import axios from 'axios';

const getWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat: 19.576529,
                lon: -88.038990,
                appid: '2818359e859c27f6994b77d6b21245a0'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener el clima:', error.response?.data || error.message);
    }
}

getWeather();