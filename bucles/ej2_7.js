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