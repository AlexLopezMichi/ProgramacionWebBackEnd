import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

app.get('/', async (req, res) => {
    try {
        // Obtener un dato curioso de gatos
        const response = await axios.get('https://catfact.ninja/fact');
        const catFact = response.data.fact;

        // Renderizar la vista con el nombre y el dato
        res.render('index.ejs', {
            name: 'Michi',
            fact: catFact
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el dato de gato');
    }
});
