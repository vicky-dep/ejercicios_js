// Escribir un programa que indique cuántos dígitos hay en un número leído de consola.

const prompt = require('prompt-sync')();

let num = Number(prompt("Introduce un número: "));

let tmp = Math.abs(num);   // hacemos el número positivo
let digitos = 0;

if (tmp === 0) {
    digitos = 1;
} else {
    while (tmp > 0) {
        tmp = Math.floor(tmp / 10);
        digitos++;
    }
}

console.log(`El número ${num} tiene ${digitos} dígitos.`);