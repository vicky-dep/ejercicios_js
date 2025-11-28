// dibujar una casa

const prompt = require('prompt-sync')();

const alturaTecho = Number(prompt("Introduce la alatura del techo: "));

if (alturaTecho <= 1 || Number.isNaN(alturaTecho)) {
    console.log("La altura debe ser un número mayor que 1.");
} else {
    const anchoCasa = 2 * alturaTecho - 1;
    const alturaCuerpo = alturaTecho;
    for (let i = 0; i < alturaTecho; i++) {
        const espacios = " ".repeat(alturaTecho - 1 - i);
        const asteriscos = "*".repeat(2 * i + 1);
        console.log((espacios + asteriscos));
    }

    console.log("*".repeat(anchoCasa));
    
    for (let fila = 0; fila < alturaCuerpo - 2 ; fila++) {
        console.log("*" + " ".repeat(anchoCasa - 2) + "*");
    }

    if (alturaCuerpo > 1) {
        console.log("*".repeat(anchoCasa));
    }
}