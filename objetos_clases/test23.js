// 23. ¿Qué problema tiene usar JSON.parse(JSON.stringify(obj)) para clonar un *
// objeto?
// A) No clona objetos anidados
// B) Convierte todos los números en strings
// C) Pierde funciones, propiedades Symbol y tipos especiales como Date, Map,
// etc.
// D) Lanza error si el objeto no tiene prototipo

const origen = { a: 1 };
//Forma moderna
Object.setPrototypeOf(origen, { unaFuncion() {
    console.log('a = ' + this.a);
}});
//Forma antigua
// origen.__proto__.unaFuncion = function () {
//     console.log('a = ' + this.a);
// }

const destino = JSON.parse(JSON.stringify(origen));
// para intercambiar en formate JSON
// parse -> de cadena a objeto
// stringify -> de objeto a cadena
// cuando serializas el objeto, la informacion sobre el prototipo no se tiene en cuenta

console.log(destino);
origen.unaFuncion();
console.log(destino.__proto__);

const obj = {
    nombre: 'John',
    saludar() {
        console.log('saludar');
    }
}

// stringify borra las funciones
// SERIALIZAR == STRINGIFY => object -> string
let json = JSON.stringify(obj);
console.log(json);

// DESERIALIZAR == PARSE => string -> object
let obj2 = JSON.stringify(obj);
console.log(obj2);

// las API son mecanismos de comunicacion entre cliente y servidor, intercambiando estos JSON (no se transmiten funciones ni datos del prototipo)