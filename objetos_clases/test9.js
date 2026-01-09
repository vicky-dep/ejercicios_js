// 9. ¿Cuál de estas opciones muestra una forma correcta de definir una clase
// asignada a una constante?
// A) const Persona = class Persona { constructor(nombre) { this.nombre = nombre;
// } };
// B) const Persona = class { constructor(nombre) { this.nombre = nombre; } };
// C) Ambas, A y B
// D) Ninguna de las dos

const Persona = class Persona { 
    constructor(nombre) { 
        this.nombre = nombre;} 
};

console.log(Persona);
console.log(Persona.toString());

const Person = class { 
    constructor(name) { 
        this.name = name; 
    } 
};

console.log(Person);
console.log(Person.toString());