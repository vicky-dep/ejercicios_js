// 15. ¿Cuál de estas formas de crear un objeto NO es correcta en JavaScript? *
// Marca solo un óvalo.
// A) const obj = {};
// B) const obj = new Object();
// C) const obj = Object.create(Object.prototype);
// D) const obj = create.object();

// esto esta mal
// const obj = create.object();

const obj = Object.create({nombre: 'Jose'});
console.log(obj);
console.log(obj.__proto__);
console.log(obj.nombre);