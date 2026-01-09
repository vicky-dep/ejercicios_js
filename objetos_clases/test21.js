// 21. Dados:
// *
// const original = {
// nombre: "Ana",
// direccion: {
// ciudad: "Sevilla"
// }
// };
// const copia = { ...original };
// copia.direccion.ciudad = "Granada";
// ¿Qué ocurre?

// A) Solo cambia copia.direccion.ciudad
// B) Cambian original.direccion.ciudad y copia.direccion.ciudad
// C) Se lanza una excepción
// D) copia.direccion es undefined

const original = {
    nombre: "Ana",
    direccion: {
        ciudad: "Sevilla"
    }
};
// ... operador spread
// aqui cambia tanto original como copia cuando cambio Sevilla por Granada
const copia = { ...original };
copia.direccion.ciudad = "Granada";

console.log(original);
console.log(copia);

// sucederia lo mismo con assign
// const copia2 = Object.assign({}, original);

// lodash -> libreria... para hacer cloneDeep ??