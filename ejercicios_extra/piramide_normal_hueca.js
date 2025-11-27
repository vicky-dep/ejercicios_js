const prompt = require("prompt-sync")();

const altura = Number(prompt("Introduce la altura de la pirámide hueca: "));

// Validación opcional
if (altura <= 0 || Number.isNaN(altura)) {
    console.log("La altura debe ser un número positivo.");
} else {

    // Primera línea (la punta)
    console.log(" ".repeat(altura - 1) + "*");

    // Línea centrales (desde i = 1 hasta i = altura-2)
    for (let i = 1; i < altura - 1; i++) {
        const espaciosIzq = " ".repeat(altura - 1 - i);
        const espaciosCentro = " ".repeat(2 * i - 1);
        console.log(espaciosIzq + "*" + espaciosCentro + "*");
    }

    // Última línea (base llena)
    if (altura > 1) {
        console.log("*".repeat(2 * altura - 1));
    }
}

/* OTRA FORMA: 

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
*/

// otra forma:
// Pirámide hueca simétrica con process.stdout.write()

// const n = 5; // altura

// for (let i = 1; i <= n; i++) {
//     // espacios iniciales
//     for (let s = 1; s <= n - i; s++) {
//         process.stdout.write(" ");
//     }

//     // asteriscos y huecos
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j === 1 || j === 2 * i - 1 || i === n) {
//             process.stdout.write("*"); // bordes y base
//         } else {
//             process.stdout.write(" "); // hueco interior
//         }
//     }

//     // salto de línea
//     process.stdout.write("\n");
// }