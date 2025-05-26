// a. Igualdad exacta con toBe
function sum(a, b) {
  return a + b;
}

// b. Comparación de objetos con toEqual
function createUser(name, age) {
  return { name, age };
}

// c. Verificación de valores nulos y definidos
function getNullable(value) {
  if (value === null) return null;
  if (value === undefined) return undefined;
  return value;
}

// e. Coincidencia de cadenas con expresiones regulares
function getWelcomeMessage(name) {
  return `Bienvenido, ${name}`;
}

// f. Verificación de contenido en arrays
function getNames() {
  return ['Chloe', 'Chiwis', 'Mango'];
}

// g. Negación de matchers
function getStatus() {
  return 'Activo';
}

// h. Pruebas asíncronas con promesas
function fetchData(shouldResolve = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Datos recibidos");
      } else {
        reject("Error en la solicitud");
      }
    }, 100);
  });
}

module.exports = {
  sum,
  createUser,
  getNullable,
  getWelcomeMessage,
  getNames,
  getStatus,
  fetchData,
};