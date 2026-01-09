// 3. ¿Cuál de estas definiciones de clase ES correcta en JavaScript? *
// A) class Persona(nombre) { this.nombre = nombre; }
// B) class Persona { constructor(nombre) { this.nombre = nombre; } }
// C) class Persona = function(nombre) { this.nombre = nombre; }
// D) class Persona: (nombre) => { this.nombre = nombre; }

// otra forma de crear un objeto en js: con class
class Persona { 
    
    constructor(nombre) { 
        this.nombre = nombre; 
    } 

}

let persona = new Persona('jose');
console.log(persona);

persona.apellidos = 'Martin Tejero';
persona.nif = '7489456X';

console.log(persona);

const otraPersona = {
    nombre: 'Jose',
    apellidos: 'Martin Tejero',
    nif: '7489456X',
};

console.log(otraPersona);