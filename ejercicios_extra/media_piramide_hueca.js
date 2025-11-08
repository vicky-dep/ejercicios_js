// MEDIA PIRAMIDE HUECA:

// *
// **
// * *
// *  *
// *****

const prompt = require('prompt-sync')();

const altura = Number(prompt("Introduzca altura: "));

for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === altura) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}