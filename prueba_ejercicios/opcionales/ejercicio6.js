// Se necesita un sistema que solicita dos números, los cuales son un rango, de los cuales 
// queremos que imprima el total de la suma de todos los números que se encuentran dentro de este rango.

const prompt = require('prompt-sync')();

const n1 = Number(prompt("Introduce el primer numero del rango: "));
const n2 = Number(prompt("Introduce el segundo numero del rango: "));

let suma = 0;
let inicio = Math.min(n1, n2);
let fin = Math.max(n1, n2);

for (let i = inicio; i <= fin; i++) {
    suma += i;
}

console.log(`La suma total de todos los números entre ${inicio} y ${fin} es: ${suma}`);


// LO MISMO CON FUNCIONES:
/*
const prompt = require('prompt-sync')();

function sumarRango(n1, n2) {
    let inicio = Math.min(n1, n2);
    let fin = Math.max(n1, n2);
    let suma = 0;

    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}

const n1 = Number(prompt("Introduce el primer número del rango: "));
const n2 = Number(prompt("Introduce el segundo número del rango: "));

const resultado = sumarRango(n1, n2);

console.log(`La suma total del rango es: ${resultado}`);
*/