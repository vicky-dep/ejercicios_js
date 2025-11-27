// *********
//  *     *
//   *   *
//    * *
//     *
//    * *
//   *   *
//  *     *
// *********

const prompt = require("prompt-sync")();

let h = Number(prompt("Introduce altura del reloj (mínimo 2): "));

if (h <= 1 || Number.isNaN(h)) {
    console.log("La altura debe ser mayor que 1.");
} else {

    let ancho = 2 * h - 1;

    // Parte superior (piramide invertida hueca)
    console.log("*".repeat(ancho));

    for (let i = 1; i < h - 1; i++) {
        let ext = " ".repeat(i);
        let centro = ancho - 2 * i - 2;
        console.log(ext + "*" + " ".repeat(centro) + "*");
    }

    console.log(" ".repeat(h - 1) + "*");

    // Parte inferior (piramide hueca normal)
    for (let i = h - 2; i > 0; i--) {
        let ext = " ".repeat(i);
        let centro = ancho - 2 * i - 2;
        console.log(ext + "*" + " ".repeat(centro) + "*");
    }

    console.log("*".repeat(ancho));
}