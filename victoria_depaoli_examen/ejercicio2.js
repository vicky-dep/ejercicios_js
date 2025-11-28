// Ejercicio 2: dibujar H y pajarita

const prompt = require("prompt-sync")();

function dibujarH(altura) {

    do {
        altura = Number(prompt("Introduce la altura de la H (impar>=5): "));
        if (altura % 2 === 0 || altura < 5 || Number.isNaN(altura)) {
            console.log("Debe ser un número impar mayor o igual que 5.");
        }
    } while (altura % 2 === 0 || altura < 5 || Number.isNaN(altura));

    let borde = 3;
    let huecoBloques = (altura - 1)/2;
    let nEspacios = huecoBloques * 3;
    let anchoTotal = borde * 2 + nEspacios;
    
    let lineaHueco = "*".repeat(borde) + " ".repeat(nEspacios) + "*".repeat(borde);
    let lineaLlena = "*".repeat(anchoTotal);

    for (let i = 0; i < (altura - 1)/2; i++) {
        console.log(lineaHueco);
    }
    console.log(lineaLlena);

    for (let i = 0; i < (altura - 1)/2; i++) {
        console.log(lineaHueco);
    }
}

dibujarH();

function dibujarPajarita(h) {
    /*
    do {
        h = Number(prompt("Introduce la altura de la pajarita (impar>=3): "));
        if (h % 2 === 0 || h < 3 || Number.isNaN(h)) {
            console.log("Debe ser un número impar mayor o igual que 3.");
        }
    } while (h % 2 === 0 || h < 5 || Number.isNaN(h));
    */

    h = Number(prompt("Introduce la altura de la pajarita (impar>=3): "));
   
    if (h % 2 === 0 || h < 3 || Number.isNaN(h)) {
        console.log("Debe ser un número impar mayor o igual que 3.");
    } else {
        let mitad = Math.floor(h/2);
   
        for (let i = 0; i <= mitad; i++) {
            let ext = " ".repeat(i);
            let centro = 2 * (mitad - i) - 1;
   
            if (i === mitad) {
                console.log("*".repeat(h));
            } else {
                console.log("*" + " ".repeat(centro) + "*");
            }
        }
   
       for (let i = mitad - 1; i >= 0; i--) {
           let ext = " ".repeat(i);
           let centro = 2 * (mitad - i) - 1;
   
           if (i === mitad) {
               console.log("*".repeat(h));
           } else {
               console.log("*" + " ".repeat(centro) + "*");
           }
       }
   }
}

dibujarPajarita();