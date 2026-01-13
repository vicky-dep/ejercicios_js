// 28. ¿Qué hace Object.defineProperty en este ejemplo? *
// const obj = {};
// Object.defineProperty(obj, "id", {
// value: 1,
// writable: false,
// enumerable: false,
// configurable: false
// });
// A) Define id pero se puede borrar y enumerar sin problemas
// B) Define id que no se puede modificar, no sale en for...in y no se puede borrar
// C) Solo define id como propiedad enumerable y modificable
// D) Lanza error porque falta get

const obj = {};
Object.defineProperty(obj, "id", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: false
});

const obj2 = {};
Object.defineProperty(obj2, "nombre", {
    value: 'josé',
    writable: false,
    enumerable: true
});

for (let key in obj2) {
    console.log(key);
}

obj2.nombre = 'josé m.';
console.log(obj2);