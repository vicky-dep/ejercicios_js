// 10. ¿Cuál es la diferencia principal entre una función constructora y una clase *
// en JS moderno?
// A) Las clases no usan prototipos
// B) Las funciones constructoras no pueden tener métodos
// C) Las clases son azúcar sintáctico sobre el sistema de prototipos existente
// D) Las clases crean una herencia basada en clases como en Java, no en prototipos

// Syntax sugar, endulzante sintactico
class Persona { 
    constructor(nombre) { 
        this.nombre = nombre;} 

    presentar() {
        console.log(`Hola, soy una persona de nombre ${this.nombre}!`);
    }
};

// esto es lo mismo que lo anterior:
// function Persona(nombre) {
//     this.nombre = nombre;
// }

// Persona.prototype.presentar = function () {
//     console.log(`Hola, soy una persona de nombre: ${this.nombre}`);
// }

//class
console.log(Persona);
console.log(Persona.toString());
//object
const persona = new Persona('jose');
console.log(persona);
//prototype
console.log(persona.__proto__);
console.log(persona.__proto__.presentar.toString());