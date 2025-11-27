const prompt = require("prompt-sync")();

const altura = Number(prompt("Introduce la altura de la pirámide invertida hueca: "));

if (altura <= 0 || Number.isNaN(altura)) {
    console.log("La altura debe ser un número positivo.");
} else {

    // Primera línea: base superior (llena)
    console.log("*".repeat(2 * altura - 1));

    // Líneas intermedias
    for (let i = 1; i < altura - 1; i++) {

        const espaciosIzq = " ".repeat(i);
        const espaciosCentro = " ".repeat(2 * (altura - i) - 3);

        console.log(espaciosIzq + "*" + espaciosCentro + "*");
    }

    // Última línea: la punta inferior
    if (altura > 1) {
        console.log(" ".repeat(altura - 1) + "*");
    }
}