// Necesitamos un sistema que capture 20 números y después de capturarlos 
// que haga la revisión de estos para indicarnos cuantos son pares y cuántos son impares.

const prompt = require('prompt-sync')();

let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <= 20; i++) {
    let num = Number(prompt(`Introduce el número ${i}: `));

    if (num % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

console.log(`Cantidad de números pares: ${contadorPares}`);
console.log(`Cantidad de números impares: ${contadorImpares}`);