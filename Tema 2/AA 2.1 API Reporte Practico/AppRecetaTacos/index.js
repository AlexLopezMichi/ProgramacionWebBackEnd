import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const recetaJSON = `[
    {
        "id": "0001",
        "tipo": "taco",
        "nombre": "Taco de Cochinita",
        "precio": 20.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Cochinita",
                "preparacion": "Cocida en horno de tierra"
            },
            "salsa": {
                "nombre": "Habanero",
                "picor": "Alto"
            },
            "acompañamientos": [
                {
                    "nombre": "Cebolla morada",
                    "cantidad": "1/4 de taza",
                    "ingredientes": [
                        "Cebolla morada",
                        "Cilantro",
                        "Limón"
                    ]
                },
                {
                    "nombre": "Guacamole",
                    "cantidad": "1/4 de taza",
                    "ingredientes": [
                        "Aguacate",
                        "Cilantro",
                        "Limón",
                        "Sal",
                        "Cebolla"
                    ]
                }
            ]
        }
    },
    {
        "id": "0002",
        "tipo": "taco",
        "nombre": "Taco de Pastor",
        "precio": 18.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Pastor",
                "preparacion": "Cocinada en trompo"
            },
            "salsa": {
                "nombre": "Verde",
                "picor": "Medio"
            },
            "acompañamientos": [
                {
                    "nombre": "Piña",
                    "cantidad": "2 rodajas",
                    "ingredientes": [
                        "Piña fresca"
                    ]
                },
                {
                    "nombre": "Cilantro y cebolla",
                    "cantidad": "1/4 de taza",
                    "ingredientes": [
                        "Cilantro",
                        "Cebolla blanca"
                    ]
                }
            ]
        }
    },
    {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco de Barbacoa",
        "precio": 22.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Barbacoa",
                "preparacion": "Cocinada al vapor en pencas de maguey"
            },
            "salsa": {
                "nombre": "Roja",
                "picor": "Alto"
            },
            "acompañamientos": [
                {
                    "nombre": "Cebolla y cilantro",
                    "cantidad": "1/4 de taza",
                    "ingredientes": [
                        "Cebolla blanca",
                        "Cilantro"
                    ]
                },
                {
                    "nombre": "Limón",
                    "cantidad": "2 gajos",
                    "ingredientes": [
                        "Limón fresco"
                    ]
                }
            ]
        }
    },
    {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de Carnitas",
        "precio": 19.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Carnitas",
                "preparacion": "Cocinadas en cazo de cobre"
            },
            "salsa": {
                "nombre": "Salsa de tomatillo",
                "picor": "Bajo"
            },
            "acompañamientos": [
                {
                    "nombre": "Cebolla picada",
                    "cantidad": "1/4 de taza",
                    "ingredientes": [
                        "Cebolla blanca"
                    ]
                },
                {
                    "nombre": "Rábano",
                    "cantidad": "3 rodajas",
                    "ingredientes": [
                        "Rábano fresco"
                    ]
                }
            ]
        }
    }
]`;

const recetasTacos = JSON.parse(recetaJSON);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: 'Receta no encontrada' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});