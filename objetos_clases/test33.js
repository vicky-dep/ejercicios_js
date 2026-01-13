// 33. ¿Qué ventaja tiene usar un Symbol como clave de propiedad? *
// A) Hace el acceso mucho más rápido
// B) Las propiedades Symbol nunca se pueden leer
// C) Evitan colisiones de nombres porque cada Symbol es único
// D) Son obligatorias para todas las propiedades privadas

const miSymbolSinDesc = Symbol();
const id = Symbol('id');

const obj = {
    [miSymbolSinDesc]: 'hola',
    [id]: 1234,
}

console.log(obj);
console.log(obj[miSymbolSinDesc]);
console.log(obj[id]);