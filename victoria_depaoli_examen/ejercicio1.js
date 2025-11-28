// Ejercicio 1 : Registro de temperaturas con centinela

const prompt = require("prompt-sync")();

let n;
let numDiasBajoCero = 0;
let numDiasTemplado = 0;
let numDiasTempAlta = 0;
let media;
let suma = 0;
let contador = 0;
let tempMax = -Infinity;
let tempMin = +Infinity;


while (n != 999) {

    n = Number(prompt("Introduce la temperatura: "));
    if (n < -50 || n > 60 || Number.isNaN(n)) {
        console.log("La cantidad debe ser un número entre -50 y 60.");
    } else {
        
        if (n < 0) {
            numDiasBajoCero++;
        } else if (n > 30) {
            numDiasTempAlta++;
        } else {
            numDiasTemplado++;
        }
        
        if (n > tempMax) tempMax = n;
        
        if (n < tempMin) tempMin = n;
        
        suma += n;
        contador++;
        
    }
}

    /*
    } while (n < -50 || n > 60 || Number.isNaN(n));

} while (n != 999);
 */

console.log(`\n=== RESUMEN DE TEMPERATURAS ===`);
console.log(`Total días registrados: ${contador}`);
console.log(`Número días bajo cero: ${numDiasBajoCero}`);
console.log(`Número días templados: ${numDiasTemplado}`);
console.log(`Número días calor: ${numDiasTempAlta}`);
console.log(`Temperatura media: ${suma / contador}`);
console.log(`Temperatura máxima: ${tempMax}`);
console.log(`Temperatura mínima: ${tempMin}`);