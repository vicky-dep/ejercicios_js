// 35. ¿Qué recorre for...in sobre un objeto en este ejemplo? *
// const proto = { a: 1 };
// const obj = Object.create(proto);
// obj.b = 2;
// for (const clave in obj) {
// console.log(clave);
// }
// ¿Qué se imprimirá?
// A) Solo "b"
// B) "a" y "b" (incluyendo propiedades heredadas enumerables)
// C) Solo "a"
// D) Nada, for...in no recorre objetos
const proto = {a : 1};
const obj = Object.create(proto);
obj.b = 2;
//for in
for (const clave in obj) {
    console.log(`${clave} = ${obj[clave]}`);
}


//Extra for of
const array = [1, 2, 3, 'josé'];
for (const value of array) {
    console.log(value);
}