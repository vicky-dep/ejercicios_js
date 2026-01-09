// 3. Dado:
// *
// class Persona {
// constructor(nombre) {
// this.nombre = nombre;
// }
// static crearAnonimo() {
// return new Persona("Anónimo");
// }
// }
// const p = Persona.crearAnonimo();
// ¿Qué es p?

// A) Una instancia de Persona con nombre = "Anónimo"
// B) La clase Persona
// C) undefined
// D) Un objeto literal sin prototipo Persona

class Persona {

    constructor(nombre) {
        this.nombre = nombre;
    }

    static crearAnonimo() {
        return new Persona("Anónimo");
    }
}

const p = Persona.crearAnonimo();

console.log(p);