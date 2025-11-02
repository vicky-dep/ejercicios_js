// Lee desde entrada dos variables numéricas A y B. 
// Con ellas se pide realizar un algoritmo que intercambie los valores
//  de ambas variables y muestre cuánto valen al final las dos variables.

let prompt = require('prompt-sync')();

let a = prompt('Introduzca a:');
let b = prompt('Introduzca b:');

console.log(`El valor original de a es: ${a}`);
console.log(`El valor original de b es: ${b}`);

let b2 = b;

b = a;
a = b2;

console.log(`El nuevo valor de a es: ${a}`);
console.log(`El nuevo valor de b es: ${b}`);