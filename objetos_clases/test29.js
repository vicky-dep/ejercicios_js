// 29. Dado:
//     *
// const proto = { saludar() { console.log("hola"); } };
// const obj = Object.create(proto);
// ¿Qué es cierto?
// A) obj.saludar no existe
// B) proto es el prototipo de obj
// C) obj es el prototipo de proto
// D) Object.create siempre crea un objeto sin prototipo

const proto = { saludar() { console.log("hola"); } };
const obj = Object.create(proto);