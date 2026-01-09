// 20. ¿Cuál es una forma correcta de hacer una copia superficial (shallow copy) *
// de un objeto?

// A) const copia = original;
// B) const copia = Object.assign(original, {});
// C) const copia = Object.assign({}, original);
// D) const copia = clone(original);

let original = { atrib: 'un atributo'};
const copia = Object.assign({a: 1}, original);
console.log(copia);
// no solamente se copian atributos, las funciones tambien se copiarian