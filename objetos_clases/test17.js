// 17. ¿Cuál de estas crea una propiedad con nombre calculado a partir de una
// variable?
// *
// const clave = "edad";
// A) const persona = { clave: 30 };
// B) const persona = { "clave": 30 };
// C) const persona = { [clave]: 30 };
// D) const persona = { ${clave}: 30 };

const clave = "edad";
// si utilizo corchete va a utilizar el valor de edad para setearlo
const persona = { [clave]: 30 };

console.log(persona);