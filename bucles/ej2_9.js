// Modifica el algoritmo anterior para que se muestre el interior del cuadrado hueco.
/*
    ****
    *  *
    *  *
    ****
*/

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