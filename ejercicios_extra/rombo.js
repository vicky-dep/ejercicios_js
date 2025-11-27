// dibujar un rombo

/* SIN FUNCION

let prompt = require("prompt-sync")();

let n = Number(prompt("Introduce la altura del rombo (impar): "));

if (n % 2 === 0 || n <= 0) {
    console.log("La altura debe ser un número impar mayor que 0.");
} else {
    let mitad = Math.floor(n / 2);
    
    // Mitad superior
    for (let i = 0; i <= mitad; i++) {
        let espacios = " ".repeat(mitad - i);
        let asteriscos = "*".repeat(2 * i + 1);
        console.log(espacios + asteriscos);
    }
    
    // Mitad inferior
    for (let i = mitad - 1; i >= 0; i--) {
        let espacios = " ".repeat(mitad - i);
        let asteriscos = "*".repeat(2 * i + 1);
        console.log(espacios + asteriscos);
    }
}
*/

const prompt = require("prompt-sync")();

function dibujarRombo(n) {
    let mitad = Math.floor(n / 2);

    for (let i = 0; i <= mitad; i++) {
        console.log(" ".repeat(mitad - i) + "*".repeat(2 * i + 1));
    }

    for (let i = mitad - 1; i >= 0; i--) {
        console.log(" ".repeat(mitad - i) + "*".repeat(2 * i + 1));
    }
}

function leerAlturaImpar() {
    let n;
    do {
        n = Number(prompt("Introduce altura del rombo (impar): "));
        if (n % 2 === 0 || n <= 0 || Number.isNaN(n)) {
            console.log("Debe ser un número impar mayor que 0.");
        }
    } while (n % 2 === 0 || n <= 0 || Number.isNaN(n));
    return n;
}

let altura = leerAlturaImpar();
dibujarRombo(altura);