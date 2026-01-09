// 8. ¿Cuál es la forma más habitual de definir un método compartido usando
// prototipos con una función constructora?

// A) function Persona(nombre) { this.nombre = nombre; } Persona.saludar =
// function() { console.log("Hola"); };
// B) function Persona(nombre) { this.nombre = nombre; prototype.saludar =
// function() { console.log("Hola"); }; }
// C) function Persona(nombre) { this.nombre = nombre; }
// Persona.prototype.saludar = function() { console.log("Hola, soy " + this.nombre); };
// D) prototype.Persona.saludar = function() { console.log("Hola"); };

function Persona(nombre) { this.nombre = nombre; }

Persona.prototype.saludar = function() { console.log("Hola, soy " + this.nombre); };

const persona = new Persona('jose');

console.log(persona);
console.log(persona.__proto__);
console.log(persona.__proto__.saludar.toString());