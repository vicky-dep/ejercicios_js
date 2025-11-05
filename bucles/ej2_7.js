// Algoritmo que lea números enteros hasta teclear 0, 
// y nos muestre el máximo, el mínimo y la media de todos ellos.

const prompt = require('prompt-sync')();

let numero = Number(prompt('Introduzca un número (0 para salir): '));

if (numero === 0) {
    console.log("No se introdujeron números válidos.");
} else {
    let maximo = numero;
    let minimo = numero;
    let suma = numero;
    let contador = 1;

    do {
        numero = Number(prompt('Introduzca otro número (0 para salir): '));

        if (numero !== 0) {
            suma += numero;
            contador++;

            if (numero > maximo) maximo = numero;
            if (numero < minimo) minimo = numero;
        }
    } while (numero !== 0);

    let media = suma / contador;

    console.log(`El máximo es: ${(maximo)}`);
    console.log(`La mínimo es: ${(minimo)}`);
    console.log(`La media es: ${(media).toFixed(2)}`);
}

// otra forma de resolverlo:
/*
const prompt = require('prompt-sync')();

let max = -Infinity;
let min = Infinity; // el infinito positivo
let count = 0;
let acc = 0;
let n;

do {
    n = Number(prompt("Introduce n: "));
    if(n !== 0) {
        if(n>max) {
            max = n;
        }
        if (n<min) {
            min = n;
        }
        acc += n;
        count++;
    }
} while (n != 0);

console.log(`El máximo es: ${max}, el mínimo: ${min} y la media: ${acc/count}`);
*/