const prompt = require('prompt-sync')();

const altura = Number(prompt("Introduzca altura: "));

for (let i = 0; i < altura; i++) {
    const espacios = " ".repeat(altura - 1 - i);
    const estrellas = "*".repeat(2 * i + 1);
    console.log(espacios + estrellas);
}

/* OTRA FORMA:

const prompt = require('prompt-sync')();

const altura = Number(prompt("Introduzca altura: "));

let contador = 0;
// let numAst = 1;

while(contador < altura) {

    process.stdout.write(' '.repeat(altura-1 -contador));

    process.stdout.write('*'.repeat(2*contador + 1));
    
    //process.stdout.write('*'.repeat(numAst));
    
    process.stdout.write('\n');
    
    contador++;
    //numAst += 2;
}
*/