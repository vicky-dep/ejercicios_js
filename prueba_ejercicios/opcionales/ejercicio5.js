// Se necesita un programa para calcular el factorial de un número dado, 
// que corresponda a la fórmula: N! = N*(N-1)*(N-2)* ... *(N-(N-1))

const prompt = require('prompt-sync')();

let num = Number(prompt('Introduce un numero para calcular su factorial: '));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Caso base
    }
    return n * factorial(n - 1); // Llamada recursiva
}

console.log(`El factorial de ${num} es: ${factorial(num)}`);