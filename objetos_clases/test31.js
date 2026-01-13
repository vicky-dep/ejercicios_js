// 31. ¿Qué hace bind en este ejemplo?
// *
// function saludar() {
//     console.log("Hola " + this.nombre);
// }
// const persona = { nombre: "Ana" };
// const saludarPersona = saludar.bind(persona);
// saludarPersona();
//
// A) Ejecuta saludar inmediatamente
// B) Devuelve una nueva función con this fijado a persona
// C) Cambia permanentemente this de todas las funciones
// D) Lanza error porque bind solo funciona con clases

function saludar() {
    console.log("Hola " + this.nombre);
}
const persona = { nombre: "Ana" };
const saludarPersona = saludar.bind(persona);
saludarPersona();