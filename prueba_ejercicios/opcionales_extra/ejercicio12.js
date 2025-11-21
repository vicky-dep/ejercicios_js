// Escribir un programa que indique si un número introducido por consola es divisible entre dos y cinco (a la vez).

const prompt = require('prompt-sync')();

let num = Number(prompt('Introduce un número'));

if (num % 2 == 0 && num % 5 == 0) {
    console.log(`El numero: ${num} es divisible por 2 y por 5.`);
} else {
    console.log(`El numero: ${num} NO es divisible por 2 y por 5.`);
}