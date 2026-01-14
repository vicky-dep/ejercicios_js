// 32. ¿Cuál es la forma correcta de crear herencia entre clases en JS? *
// Marca solo un óvalo.
// A) class Empleado extends Persona { constructor(nombre, salario) {
//     this.nombre = nombre; this.salario = salario; } }
// B) class Empleado : Persona { constructor(nombre, salario) { super(nombre);
//     this.salario = salario; } }
// C) class Empleado extends Persona { constructor(nombre, salario) {
//     super(nombre); this.salario = salario; } }
// D) class Empleado(Persona) { constructor(nombre, salario) { Persona.call(this,
//     nombre); this.salario = salario; } }

class Persona {
    constructor (nombre) {
        this.nombre = nombre;
    }
}

class Empleado extends Persona { // empleado hereda de persona
    constructor(nombre, salario) { // constructor con 2 elementos
        super(nombre); // invocas al constructor de la super clase
        this.salario = salario; // argumento especifico aqui 
    }
}

const empleado = new Empleado('jose',1000);
console.log(empleado);