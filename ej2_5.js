// Dada una secuencia de números leídos por teclado, que acabe con un –1, 
// por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; 
// Realizar el algoritmo que calcule la media aritmética. 
// Suponemos que el usuario no insertará números negativos.

const prompt = require('prompt-sync')();

let contador = 0; 

let acumulador = 0;

let n = prompt('Introduzca un número (-1 para salir): ');

while (n !== -1) {
    n = prompt('Introduzca otro número (-1 para salir): ');
    acumulador += n;
    contador++;    
}

if (contador > 0) {
    let media = acumulador / contador;
    console.log(`La media aritmética es: ${media}`);
} else {
    console.log("No se introdujeron números válidos.");
}