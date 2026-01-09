// 7. Dado el siguiente código con función constructora: *
// function Coche(marca) {
// this.marca = marca;
// this.arrancar = function() {
// console.log("Arrancando " + this.marca);
// };
// }
// ¿Cuál es un inconveniente de esta implementación?
// A) No se puede crear instancias con new
// B) Cada instancia tendrá su propia copia de la función arrancar en lugar de
// compartirla en el prototipo
// C) this nunca apunta al objeto
// D) marca no se puede leer desde fuera

// funcion constructora (no existian las clases)
// desperdicio de memoria -> quitar la funcion "arrancar"
// utilizar herencia
function Coche(marca) {
    this.marca = marca;
    this.arrancar = function() {
        console.log("Arrancando " + this.marca);
    };
}

const coche1 = new Coche("seat");

console.log(coche1); // imprime ...
console.log(coche1.__proto__); // objeto vacio, no hay padre aun
console.log(coche1.arrancar.toString()); // aqui ves el metodo

//funciones por prototype de función constructora
function CocheConProto(marca) {
    this.marca = marca;
}

// existe en la funcion constructora una funcion especial -> prototype
// le creas una propiedad "arrancar" que es una funcion
// cada vez que instancies una funcion con proto -> la funcion va a estar una sola vez...
CocheConProto.prototype.arrancar = function() {
    console.log("Arrancando " + this.marca);
}

const cocheConProto = new CocheConProto('volvo');
console.log(cocheConProto);
console.log(cocheConProto.__proto__);
console.log(cocheConProto.__proto__.arrancar.toString());