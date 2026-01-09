// 4. Dada la siguiente función constructora: *
// function Persona(nombre) {
// this.nombre = nombre;
// }
// const p = Persona("Ana");
// ¿Qué ocurre en un entorno no estricto?
// A) p es un nuevo objeto con nombre = "Ana"
// B) p es undefined y nombre se asigna al objeto global
// C) Se lanza siempre un error
// D) p es la propia función Persona

function Persona(nombre) {
    this.nombre = nombre;
}

// sin "new" delante no toma la funcion constructora (no hay objeto -> undefined)
const p = Persona("Ana");

console.log(p);
console.log(globalThis);