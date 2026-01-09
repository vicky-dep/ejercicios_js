/*
2. ¿Qué hace la palabra clave new al usar una función constructora? *
A) Ejecuta la función en modo estricto y devuelve undefined
B) Crea un nuevo objeto vacío, enlaza this a ese objeto, ajusta el prototipo y devuelve ese objeto
C) Convierte la función en una clase
D) Solo añade propiedades al prototipo global
*/

// Funcion constructora (empieza con la primera letra en mayuscula):
function Persona(nombre) {
  this.nombre = nombre;
}

const p = new Persona("Ana");
console.log(p);

function Person(name) {
    //this = {};
    this.name= name;
    //this.[[prototype]]=Person
    //return this;
}

const person = new Person("Joe");
console.log(person);