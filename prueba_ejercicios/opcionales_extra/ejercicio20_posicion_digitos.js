// Escribir un programa que indique el dígito mayor y su posición y 
// el dígito menor y su posición en un número introducido por consola.

const prompt = require('prompt-sync')();

let num = prompt("Introduce un número: ");
let original = num;

// Quitar signo si es negativo
if (num[0] === "-") num = num.slice(1);

let maxDigito = -Infinity;
let minDigito = Infinity;
let posMax = 0;
let posMin = 0;

// Recorrer cada carácter
for (let i = 0; i < num.length; i++) {
    let d = Number(num[i]);

    if (d > maxDigito) {
        maxDigito = d;
        posMax = i + 1;
    }

    if (d < minDigito) {
        minDigito = d;
        posMin = i + 1;
    }
}

console.log(`Número analizado: ${original}`);
console.log(`Dígito mayor: ${maxDigito} (posición ${posMax})`);
console.log(`Dígito menor: ${minDigito} (posición ${posMin})`);