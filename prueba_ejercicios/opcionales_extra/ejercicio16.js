// Escribir un programa que indique la cantidad de positivos y 
// negativos de un conjunto de números enteros introducidos por consola.

const prompt = require('prompt-sync')();

const cantidad = Number(prompt("¿Cuántos números enteros quieres introducir?: "));

let positivos = 0;
let negativos = 0;

for (let i = 1; i <= cantidad; i++) {
    let num = Number(prompt(`Introduce el número ${i}: `));

    if (num > 0) {
        positivos++;
    } else if (num < 0) {
        negativos++;
    }
}

console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);