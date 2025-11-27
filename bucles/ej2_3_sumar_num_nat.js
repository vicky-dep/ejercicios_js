// Algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado.

// falta node_modules
// npm install prompt-sync

const prompt = require('prompt-sync')();

let n = prompt('Introduzca n: ');

n = Number(n);

let contador = 0;

// inicializa a 0
let acumulador = 0;

while (contador < n) {

    // al valor antiguo se le suma el valor de la secuencia y se actualiza como nuevo valor de acumulador
    acumulador = acumulador + contador;

    contador++;
}

// el resultado se muestra fuera del bucle, al final
console.log(`Total = ${acumulador}`);
