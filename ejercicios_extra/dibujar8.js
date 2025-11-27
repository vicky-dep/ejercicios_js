// funcion que dibuja un 8 de *
// donde se pide introducir la altura del del cuadrado de los huecos del 8 (por ejemplo
// en la figura la altura del hueco igual a 2 y el ancho 6 = 3*2 para pintarlo)

// ************
// ************
// ***      ***
// ***      ***
// ************
// ************
// ***      ***
// ***      ***
// ************
// ************

const prompt = require('prompt-sync')();

function dibujar8(h) {
    const borde = 3;                            // *** a izquierda y derecha
    const interior = h * 3;                     // espacios internos
    const anchoTotal = borde * 2 + interior;

    const lineaLlena = "*".repeat(anchoTotal);
    const lineaHueco = "*".repeat(borde) + " ".repeat(interior) + "*".repeat(borde);

    // Parte superior
    console.log(lineaLlena);
    console.log(lineaLlena);

    // Primer bloque de hueco
    for (let i = 0; i < h; i++) {
        console.log(lineaHueco);
    }

    // Franja central
    console.log(lineaLlena);
    console.log(lineaLlena);

    // Segundo bloque de hueco
    for (let i = 0; i < h; i++) {
        console.log(lineaHueco);
    }

    // Parte inferior
    console.log(lineaLlena);
    console.log(lineaLlena);
}

let h = Number(prompt("Introduce la altura del hueco del 8: "));
dibujar8(h);


/* aqui se dibuja un 8 simple:

******
*    *
*    *
******
*    *
*    *
******

const prompt = require('prompt-sync')();

function dibujar8(h) {
    const ancho = h * 3;

    // 1. Línea superior
    console.log("*".repeat(ancho));

    // 2. Bloque superior con hueco
    for (let i = 0; i < h; i++) {
        console.log("*" + " ".repeat(ancho - 2) + "*");
    }

    // 3. Línea del medio
    console.log("*".repeat(ancho));

    // 4. Bloque inferior con hueco
    for (let i = 0; i < h; i++) {
        console.log("*" + " ".repeat(ancho - 2) + "*");
    }

    // 5. Línea inferior
    console.log("*".repeat(ancho));
}

// PROGRAMA PRINCIPAL
let h = Number(prompt("Introduce la altura del hueco del 8: "));

if (h <= 0 || Number.isNaN(h)) {
    console.log("Introduce un número válido mayor que 0.");
} else {
    dibujar8(h);
}
*/