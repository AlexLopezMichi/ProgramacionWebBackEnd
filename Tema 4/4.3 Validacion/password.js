// Versión débil: solo verifica longitud mínima
function validarPasswordDebil(password) {
  if (typeof password !== "string") return NaN;
  // Solo valida que tenga al menos 8 caracteres
  if (password.length >= 8) {
    return true;
  }
  return false;
}

// Versión optima: verifica múltiples criterios
function validarPasswordOptima(password) {
  if (typeof password !== "string") return NaN;
  const longitudMinima = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);
  const tieneEspecial = /[!@#$%^&*()]/.test(password);
  const sinEspacios = !/\s/.test(password);

  // Palabras significativas personalizadas (puedes cambiar o expandir)
  const palabrasSignificativas = ["Chiwis", "2003"];
  const contienePalabraSignificativa = palabrasSignificativas.some(palabra =>
    password.includes(palabra)
  );
  return (
    longitudMinima &&
    tieneMayuscula &&
    tieneMinuscula &&
    tieneNumero &&
    tieneEspecial &&
    sinEspacios &&
    contienePalabraSignificativa
  );
}

module.exports = {
  validarPasswordDebil,
  validarPasswordOptima
};