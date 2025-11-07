const prompt = require('prompt-sync')();

const altura = Number(prompt("Introduzca altura: "));

let contador = 0;

while(contador < altura) {

    process.stdout.write(' '.repeat(altura-1 -contador));

    if (contador === 0) {
        process.stdout.write('*');
        process.stdout.write('\n');    
    } else if (contador === altura-1) {
        process.stdout.write('*'.repeat(2*contador + 1));
        process.stdout.write('\n');
    } else {
        // contador >  1 && contador < altura
        process.stdout.write('*');
        process.stdout.write(' '.repeat(2*contador + 1 -2));
        process.stdout.write('*');
        process.stdout.write('\n');
    }

    contador++;
}

// MEDIA PIRAMIDE HUECA:

// *
// **
// * *
// *  *
// *****

// const prompt = require('prompt-sync')();

// const altura = Number(prompt("Introduzca altura: "));

// for (let i = 1; i <= altura; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (j === 1 || j === i || i === altura) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     process.stdout.write("\n");
// }

// INTENTAR:

//             ********
//             ********
//             ********
//         ********
//         ********
//         ********
//     ********
//     ********
//     ********
// ********
// ********
// ********

// altura escalon fija: 3, anchura: 8 (solo se permiten pares), numero de pisos: 4

// INTENTAR:
// *   *
// *****
// *   *
// *****
// *   *
// *****
// *   *