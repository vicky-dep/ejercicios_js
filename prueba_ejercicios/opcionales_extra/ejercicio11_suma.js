// Escribir un programa que indique si la suma de dos valores introducidos por consola es positiva, negativa o cero.

const prompt = require('prompt-sync')();

let n1 = Number(prompt('Introduce un número'));
let n2 = Number(prompt('Introduce otro número'));

let suma = n1 + n2;

if (suma > 0) {
    console.log(`La suma de ${n1} y ${n2} es positiva`);
} else if (suma < 0) {
    console.log(`La suma de ${n1} y ${n2} es negativa`);
} else {
    console.log(`La suma de ${n1} y ${n2} es cero`);
}