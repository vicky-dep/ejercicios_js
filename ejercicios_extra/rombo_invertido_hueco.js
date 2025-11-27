// *   *
//  * *
//   *
//  * *
// *   *

const prompt = require("prompt-sync")();

let n = Number(prompt("Introduce altura del rombo invertido (impar): "));

if (n % 2 === 0 || n <= 0 || Number.isNaN(n)) {
    console.log("La altura debe ser un número impar mayor que 0.");
} else {
    let mitad = Math.floor(n / 2);

    // Parte superior invertida (desde el centro hacia afuera)
    for (let i = 0; i <= mitad; i++) {
        let ext = " ".repeat(i);
        let centro = 2 * (mitad - i) - 1;

        if (i === mitad) {
            console.log(" ".repeat(i) + "*"); // el centro
        } else {
            console.log(ext + "*" + " ".repeat(centro) + "*");
        }
    }

    // Parte inferior (simétrica)
    for (let i = mitad - 1; i >= 0; i--) {
        let ext = " ".repeat(i);
        let centro = 2 * (mitad - i) - 1;

        if (i === mitad) {
            console.log(" ".repeat(i) + "*");
        } else {
            console.log(ext + "*" + " ".repeat(centro) + "*");
        }
    }
}