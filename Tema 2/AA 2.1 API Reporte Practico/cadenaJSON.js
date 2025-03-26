const objetoJavaScript = {
    nombre: "Taco de Pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa Verde",
    } 
};

// Serializar es convertir a JSON
const jsonString = JSON.stringify(objetoJavaScript);

console.log(jsonString);