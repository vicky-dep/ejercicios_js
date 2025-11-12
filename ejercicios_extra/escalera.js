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
/*
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
*/
// Solucion del profe:
const prompt = require('prompt-sync')();

const ancho = Number(prompt("Introduzca ancho (solo par): "));

const pisos = Number(prompt("Introduzca numero de pisos: "));

let validacion = true;

if (Number.isNaN(ancho) || ancho % 2 == 1) {
    // si no es numero o es impar
    validacion = false;
}

if (Number.isNaN(pisos)) {
    // si no es numero
    validacion = false;
}

if (validacion) {
    pintarEscalera(ancho, pisos);
}

// HOIST (como si lo primero que leyera js serian las funciones)
function pintarEscalera(ancho, pisos) {

    for (let i = 0; i < pisos; i++) {
        // i es indice de piso
        for(let j = 0; j < 3; j++) {
            // j es indice de altura de escalon
            process.stdout.write(' '.repeat((ancho/2)*(pisos-1-i)));
            process.stdout.write('*'.repeat(ancho));
            process.stdout.write('\n');
        }

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
/*
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
*/