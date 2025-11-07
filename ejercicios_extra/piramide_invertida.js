const prompt = require('prompt-sync')();

const altura = Number(prompt("Introduzca altura: "));

// pinto la base
// for (let i = 0; i < 2*altura-1; i++) {
//     process.stdout.write('*'); // escribe caracter a caracter sin salto de linea (\n)
// }

let contador = 0;

while(contador < altura) {

    process.stdout.write(' '.repeat(contador));

    process.stdout.write('*'.repeat(2*altura-1 -2*contador));

    // for (let i = 0; i < 2*altura-1 -2*contador; i++) {
    //     process.stdout.write('*'); // escribe caracter a caracter sin salto de linea (\n)
    // }
    process.stdout.write('\n');

    contador++;
}