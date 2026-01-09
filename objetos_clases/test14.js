// 14. ¿Cuál de las siguientes es una forma válida de crear un objeto con una
// función constructora?
// *
// A) function Persona(nombre) { this.nombre = nombre; } const p = new
// Persona("Ana");
// B) function Persona(nombre) { this.nombre = nombre; } const p =
// Persona.new("Ana");
// C) function Persona(nombre) { this.nombre = nombre; } const p = Persona("Ana",
// new);
// D) function Persona(nombre) { this.nombre = nombre; } const p = Persona.new
// Person("Ana");

function Persona(nombre) {
    this.nombre = nombre; 
}

const p = new Persona("Ana");

console.log(p);