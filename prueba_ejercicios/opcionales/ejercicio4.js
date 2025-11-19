// Se necesita un sistema que lea los votos obtenidos por tres candidatos a alcalde 
// en la ciudad de Mijas y calcule e imprima al ganador, junto con el porcentaje 
// obtenido de votos de él y los restantes candidatos. (sin anti-pattern)

const prompt = require('prompt-sync')();

// mediante prompt informando candidato lee el numero de votos y lo devuelve
function leerVotosCandidatoConValidacion(candidato) {
    let num;
    do {
        num = Number(prompt(`Introduzca votos del candidato ${candidato}: `));
        if(Number.isNaN(num)) {
            console.log('Formato de numero de votos incorrecto.');
        } 
    } while (Number.isNaN(num));

    // FUNDAMENTAL RETORNAR ALGO!!
    return num;
}

let alcalde = '';
let votos1, votos2, votos3;
let max = -Infinity;
let suma = 0;
let contador = 1;

while (contador <= 3) {
    let votos = leerVotosCandidatoConValidacion('Candidato' + contador);
    suma += votos;

    if (votos > max) {
        alcalde = 'Candidato'+contador;
        max = votos;
    }

    switch (contador) {
        case 1:
            votos1 = votos;
            break;
        case 2:
            votos2 = votos;
            break;
        case 3:
            votos3 = votos;
            break;
    }
    contador++;
}

console.log(`
Votos totales: ${suma}. 
Votos candidato1:
${votos1} votos 
porcentaje ${votos1*100/suma}
Votos candidato2:
${votos2} votos 
porcentaje ${votos2*100/suma}
Votos candidato3:
${votos3} votos
porcentaje ${votos3*100/suma}
El ganador es:
`);