// 11. Dado este código:
// class Rectangulo {
// constructor(ancho, alto) {
// this.ancho = ancho;
// this.alto = alto;
// }
// area() {
// return this.ancho * this.alto;
// }
// }
// const r = new Rectangulo(3, 4);
// ¿Qué devuelve r.area()?
// A) 7
// B) 12
// C) undefined
// D) Lanza un error porque area no está en el constructor


class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto * this.pi; // si no lo encuentra va a ir al prototipo a buscarla
    }
}

Rectangulo.prototype.pi = 3.14;

const r = new Rectangulo(3, 4);

console.log(r.area());

console.log(r.__proto__.area.toString());