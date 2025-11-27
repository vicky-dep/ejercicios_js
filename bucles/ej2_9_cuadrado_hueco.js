// Modifica el algoritmo anterior para que se muestre el interior del cuadrado hueco.
/*
    ****
    *  *
    *  *
    ****
*/

const prompt = require("prompt-sync")();

let lado = Number(prompt("Introduce el lado del cuadrado: "));

if (lado <= 1 || Number.isNaN(lado)) {
    console.log("El lado debe ser mayor que 1 para poder dibujar un cuadrado hueco.");
} else {

    // Primera línea (toda de asteriscos)
    console.log("*".repeat(lado));

    // Líneas centrales (hueco dentro)
    for (let i = 0; i < lado - 2; i++) {
        console.log("*" + " ".repeat(lado - 2) + "*");
    }

    // Última línea (toda de asteriscos)
    console.log("*".repeat(lado));
}


/* OTRA FORMA:
const prompt = require('prompt-sync')();

let lado = Number(prompt('Introduzca el tamaño del cuadrado: '));

for (let i = 0; i < lado; i++) {
    let fila = '';

    for (let j = 0; j < lado; j++) {
        if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
            fila += '*';
        } else {
            fila += ' ';
        }
    }

    console.log(fila);
}
*/