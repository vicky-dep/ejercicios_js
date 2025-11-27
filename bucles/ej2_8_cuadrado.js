// Algoritmo que lea un número entero (lado) y a partir de 
// él cree un cuadrado de asteriscos con ese tamaño.
/*
Ejemplo, para lado = 4 escribiría:

****
****
****
****

Nota: Utiliza el modificado Sin Saltar para que Escribir no introduzca un salto de línea.
*/

const prompt = require("prompt-sync")();

let lado = Number(prompt("Introduce el lado del cuadrado: "));

if (lado <= 0 || Number.isNaN(lado)) {
    console.log("El lado debe ser un número entero mayor que 0.");
} else {
    const linea = "*".repeat(lado);
    for (let i = 0; i < lado; i++) {
        console.log(linea);
    }
}

/* OTRA FORMA:

const prompt = require("prompt-sync")();

let lado = Number(prompt("Introduce el lado del cuadrado: "));

if (lado <= 0 || Number.isNaN(lado)) {
    console.log("El lado debe ser un número entero mayor que 0.");
} else {

    for (let fila = 0; fila < lado; fila++) {

        for (let col = 0; col < lado; col++) {
            process.stdout.write("*");   // SIN SALTAR LÍNEA
        }

        console.log(); // salto de línea al terminar cada fila
    }
}
*/

/* OTRA FORMA:

const prompt = require('prompt-sync')();

let lado = Number(prompt('Introduzca el tamaño del cuadrado: '));

for (let i = 0; i < lado; i++) {
    let fila = '';
    for (let j = 0; j < lado; j++) {
        fila += '*';
    }
    console.log(fila);
}
*/