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

const prompt = require('prompt-sync')();

let lado = Number(prompt('Introduzca el tamaño del cuadrado: '));

for (let i = 0; i < lado; i++) {
    let fila = '';
    for (let j = 0; j < lado; j++) {
        fila += '*';
    }
    console.log(fila);
}