// INTENTAR:
// altura escalon fija: 3, anchura: 8 (solo se permiten pares), numero de pisos: 4

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

const alturaPiso = 3;
const anchura = 8;
const pisos = 4;

for (let piso = pisos; piso >= 1; piso--) {
    // espacios iniciales: dependen del número de piso
    const espacios = (piso - 1) * 4; // 4 espacios por nivel de desplazamiento

    for (let fila = 1; fila <= alturaPiso; fila++) {
        // escribir los espacios
        for (let s = 1; s <= espacios; s++) {
            process.stdout.write(" ");
        }

        // escribir los asteriscos del piso
        for (let col = 1; col <= anchura; col++) {
            process.stdout.write("*");
        }

        // salto de línea
        process.stdout.write("\n");
    }
}

// INTENTAR:
// *   *
// *****
// *   *
// *****
// *   *
// *****
// *   *

const prompt = require("prompt-sync")();

const filas = Number(prompt("¿Cuántas filas quieres? "));
const ancho = Number(prompt("¿Cuántas columnas (ancho)? "));

console.log();

for (let i = 1; i <= filas; i++) {
    for (let j = 1; j <= ancho; j++) {
        if (i % 2 === 0) {
            process.stdout.write("*");
        } else {
            if (j === 1 || j === ancho) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
    }
    process.stdout.write("\n");
}