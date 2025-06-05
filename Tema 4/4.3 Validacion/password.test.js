const {validarPasswordDebil, validarPasswordOptima} = require('./password');

describe('Pruebas para validarPasswordDebil (versión errónea)', () => {
  test('Caso normal: cumple mínimo de longitud', () => {
    expect(validarPasswordDebil("Chiwis2003@")).toBe(true);
  });

  test('Contraseña corta: menos de 8 caracteres', () => {
    expect(validarPasswordDebil("Ch@03")).toBe(false);
  });

  test('Sin letra mayúscula', () => {
    expect(validarPasswordDebil("chiwis2003@")).toBe(false);
  });

  test('Sin letra minúscula', () => {
    expect(validarPasswordDebil("CHIWIS2003@")).toBe(false);
  });

  test('Sin número', () => {
    expect(validarPasswordDebil("Chiwis@@@@")).toBe(false);
  });

  test('Sin carácter especial', () => {
    expect(validarPasswordDebil("Chiwis2003")).toBe(false);
  });

  test('Con espacios', () => {
    expect(validarPasswordDebil("Chiwis 2003@")).toBe(false);
  });

  test('Entrada vacía', () => {
    expect(validarPasswordDebil("")).toBe(false);
  });

  test('Entrada undefined', () => {
    expect(validarPasswordDebil(undefined)).toBeNaN();
  });

  test('Entrada tipo número (coerción de tipo)', () => {
    expect(validarPasswordDebil(12345678)).toBeNaN();
  });

  test('Contraseña con palabra significativa', () => {
    expect(validarPasswordDebil("Chiwis2003!")).toBe(true);
  });
});

describe('Pruebas para validarPasswordOptima (versión robusta)', () => {
  test('Contraseña segura y válida', () => {
    expect(validarPasswordOptima("Chiwis2003@")).toBe(true);
  });

  test('Menos de 8 caracteres', () => {
    expect(validarPasswordOptima("Ch@03")).toBe(false);
  });

  test('Sin mayúscula', () => {
    expect(validarPasswordOptima("chiwis2003@")).toBe(false);
  });

  test('Sin minúscula', () => {
    expect(validarPasswordOptima("CHIWIS2003@")).toBe(false);
  });

  test('Sin número', () => {
    expect(validarPasswordOptima("Chiwis@@@@")).toBe(false);
  });

  test('Sin carácter especial', () => {
    expect(validarPasswordOptima("Chiwis2003")).toBe(false);
  });

  test('Con espacios', () => {
    expect(validarPasswordOptima("Chiwis 2003@")).toBe(false);
  });

  test('Sin palabra significativa', () => {
    expect(validarPasswordOptima("Chiwis2003!")).toBe(true);
  });

  test('Entrada vacía', () => {
    expect(validarPasswordOptima("")).toBe(false);
  });

  test('Entrada undefined', () => {
    expect(validarPasswordOptima(undefined)).toBeNaN();
  });
});

