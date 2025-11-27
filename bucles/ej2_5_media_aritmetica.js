// Dada una secuencia de números leídos por teclado, que acabe con un –1, 
// por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; 
// Realizar el algoritmo que calcule la media aritmética. 
// Suponemos que el usuario no insertará números negativos.

const prompt = require('prompt-sync')();

let acumulador = 0;

let contador = 0; 

let n;

do {
    n = Number(prompt('Introduzca un número (-1 para salir): '));
    if (n !== -1) {
        acumulador += n;
        contador++;    
    }
} while (n !== -1)

if (contador > 0) {
    let media = acumulador / contador;
    console.log(`La media aritmética es: ${(media).toFixed(2)}`);
} else {
    console.log("No se introdujeron números válidos.");
}

/*
------- OPCION WHILE -------
const prompt = require('prompt-sync')();

let acumulador = 0;

let contador = 0; 

let n = Number(prompt('Introduzca un número (-1 para salir): '));

while (n !== -1) {
    acumulador += n;
    contador++;    
    n = Number(prompt('Introduzca otro número (-1 para salir): '));
}

if (contador > 0) {
    let media = acumulador / contador;
    console.log(`La media aritmética es: ${(media).toFixed(2)}`);
} else {
    console.log("No se introdujeron números válidos.");
}
*/