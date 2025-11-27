// dibujar un rombo hueco

const prompt = require("prompt-sync")();

function dibujarRomboHueco(n) {
    const mitad = Math.floor(n / 2);

    // Mitad superior (incluye la central)
    for (let i = 0; i <= mitad; i++) {
        let ext = " ".repeat(mitad - i);
        if (i === 0) {
            console.log(ext + "*");
        } else {
            let interior = " ".repeat(2 * i - 1);
            console.log(ext + "*" + interior + "*");
        }
    }

    // Mitad inferior
    for (let i = mitad - 1; i >= 0; i--) {
        let ext = " ".repeat(mitad - i);
        if (i === 0) {
            console.log(ext + "*");
        } else {
            let interior = " ".repeat(2 * i - 1);
            console.log(ext + "*" + interior + "*");
        }
    }
}

function leerAlturaImpar() {
    let n;
    do {
        n = Number(prompt("Introduce la altura del rombo hueco (impar): "));
        if (Number.isNaN(n) || n <= 0 || n % 2 === 0) {
            console.log("Error: debe ser un número impar mayor que 0.");
        }
    } while (Number.isNaN(n) || n <= 0 || n % 2 === 0);
    return n;
}

let altura = leerAlturaImpar();
dibujarRomboHueco(altura);