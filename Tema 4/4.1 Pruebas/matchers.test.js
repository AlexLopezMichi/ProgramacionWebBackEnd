const {
  sum,
  createUser,
  getNullable,
  getWelcomeMessage,
  getNames,
  getStatus,
  fetchData
} = require('./matchers');

// a. toBe
test('10 + 10 debe ser igual a 20', () => {
  expect(sum(10, 10)).toBe(20);
});

// b. toEqual
test('Comparación de objetos iguales', () => {
  expect(createUser('Alex', 22)).toEqual({ name: 'Alex', age: 22 });
});

// c. toBeNull, toBeUndefined, toBeDefined
test('Valor es null', () => {
  expect(getNullable(null)).toBeNull();
});

test('Valor es undefined', () => {
  expect(getNullable(undefined)).toBeUndefined();
});

test('Valor está definido', () => {
  expect(getNullable(5)).toBeDefined();
});

// d. Comparaciones numéricas
test('10 es mayor que 5', () => {
  expect(10).toBeGreaterThan(5);
});

test('5 es menor que 10', () => {
  expect(5).toBeLessThan(10);
});

test('7 es mayor o igual a 7', () => {
  expect(7).toBeGreaterThanOrEqual(7); 
});


// e. Coincidencia de cadenas con expresiones regulares
test('Mensaje contiene nombre con expresión regular', () => {
  expect(getWelcomeMessage('Chiwis')).toMatch(/Chiwis/);
});

// f. Verificación de contenido en arrays
test('El array contiene "Chiwis"', () => {
  expect(getNames()).toContain('Chiwis');
});

// g. Negación de matchers
test('El estado no deber ser Inactivo', () => {
  expect(getStatus()).not.toBe('Inactivo');
});

// h. Pruebas con promesas
test('La promesa se resuelve con datos', () => {
  return expect(fetchData(true)).resolves.toBe("Datos recibidos");
});

test('La promesa se rechaza con error', () => {
  return expect(fetchData(false)).rejects.toBe("Error en la solicitud");
});
