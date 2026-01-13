// 34. ¿Cuál es una forma moderna de comprobar si un objeto tiene una
// propiedad propia (no heredada)?
// *
// A) "prop" in obj
// B) obj.hasOwnProperty("prop")
// C) Object.hasOwn(obj, "prop")
// D) obj.prototype.hasOwnProperty("prop")

const obj = {
    name: 'Jose',
    age: 20,
};

const obj2 = {id: 1234};

console.log(obj);
console.log(obj.hasOwnProperty('name'));
console.assert(obj.hasOwnProperty('name'), 'name es requerido.');
console.assert(obj2.hasOwnProperty('name'), 'name es requerido en', obj2);

console.assert('name' in obj, 'name es requerido.');
console.assert('name' in obj2, 'name es requerido en', obj2);