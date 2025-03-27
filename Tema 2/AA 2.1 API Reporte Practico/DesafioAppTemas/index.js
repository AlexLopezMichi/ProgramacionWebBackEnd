import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const temasJSON = `{
    "temas": [
        {
            "ID": 1,
            "Nombre": "Lenguajes de programación y frameworks del lado del servidor",
            "Descripcion": "Exploración de los lenguajes y frameworks más utilizados para el desarrollo backend.",
            "Palabras_claves": ["Backend", "Frameworks", "Node.js", "Django", "Ruby on Rails"],
            "Practicas": [
                {
                    "Titulo": "Instalación y configuración de un entorno de desarrollo",
                    "Descripcion": "Configurar un entorno de desarrollo para Node.js, Python o Ruby.",
                    "Objetivo": "Familiarizarse con la configuración inicial de un entorno backend."
                },
                {
                    "Titulo": "Creación de un servidor básico",
                    "Descripcion": "Implementar un servidor HTTP con Express o Django.",
                    "Objetivo": "Comprender la estructura básica de un servidor backend."
                }
            ]
        },
        {
            "ID": 2,
            "Nombre": "Desarrollo de API",
            "Descripcion": "Diseño y desarrollo de APIs para la comunicación entre aplicaciones.",
            "Palabras_claves": ["REST", "GraphQL", "Endpoints", "Swagger", "Postman"],
            "Practicas": [
                {
                    "Titulo": "Creación de una API REST",
                    "Descripcion": "Desarrollar una API REST con Express o Flask.",
                    "Objetivo": "Entender los principios básicos de las APIs REST."
                },
                {
                    "Titulo": "Documentación de API con Swagger",
                    "Descripcion": "Generar documentación automática para una API usando Swagger.",
                    "Objetivo": "Aprender a documentar APIs correctamente."
                }
            ]
        },
        {
            "ID": 3,
            "Nombre": "Manejo de bases de datos y ORM",
            "Descripcion": "Gestión de bases de datos relacionales y no relacionales utilizando ORM.",
            "Palabras_claves": ["SQL", "NoSQL", "ORM", "MongoDB", "PostgreSQL"],
            "Practicas": [
                {
                    "Titulo": "Conexión a una base de datos",
                    "Descripcion": "Conectar una aplicación a una base de datos usando Sequelize o Mongoose.",
                    "Objetivo": "Aprender a conectar y realizar operaciones básicas en una base de datos."
                },
                {
                    "Titulo": "Modelado de datos con ORM",
                    "Descripcion": "Definir modelos y relaciones usando un ORM como Sequelize.",
                    "Objetivo": "Entender la importancia de los ORMs en el desarrollo de aplicaciones."
                }
            ]
        },
        {
            "ID": 4,
            "Nombre": "Pruebas de aplicación",
            "Descripcion": "Técnicas y herramientas para la realización de pruebas en aplicaciones.",
            "Palabras_claves": ["Testing", "Jest", "Mocha", "Cypress", "Automatización"],
            "Practicas": [
                {
                    "Titulo": "Pruebas unitarias con Jest",
                    "Descripcion": "Escribir pruebas unitarias para una función simple con Jest.",
                    "Objetivo": "Comprender la importancia de las pruebas unitarias."
                },
                {
                    "Titulo": "Pruebas de integración con Mocha",
                    "Descripcion": "Realizar pruebas de integración en una API REST con Mocha y Chai.",
                    "Objetivo": "Aprender a validar la integración de distintos componentes."
                }
            ]
        },
        {
            "ID": 5,
            "Nombre": "Implementación de aplicación",
            "Descripcion": "Despliegue y monitoreo de aplicaciones en producción.",
            "Palabras_claves": ["DevOps", "CI/CD", "Docker", "Kubernetes", "AWS"],
            "Practicas": [
                {
                    "Titulo": "Despliegue de una aplicación en Heroku",
                    "Descripcion": "Subir una aplicación Node.js o Flask a Heroku.",
                    "Objetivo": "Entender el proceso de despliegue en la nube."
                },
                {
                    "Titulo": "Configuración de CI/CD con GitHub Actions",
                    "Descripcion": "Automatizar la integración y despliegue de una aplicación con GitHub Actions.",
                    "Objetivo": "Familiarizarse con la automatización en el desarrollo de software."
                }
            ]
        }
    ]
}
  `;

const infoTemas = JSON.parse(temasJSON);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/tema/:id', (req, res) => {
    const elegirTema = infoTemas.temas.find(r => r.ID === parseInt(req.params.id));
    res.json(elegirTema || { error: 'Tema no encontrado' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});