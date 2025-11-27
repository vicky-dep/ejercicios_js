// Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. 
// Diseñar un algoritmo para este propósito.

let prompt = require('prompt-sync')();
let flagFormatoOk = true;

let alumnos = prompt('Introduce la cantidad de alumnos (varones): ');

alumnos = Number(alumnos);

if (Number.isNaN(alumnos)) {
    console.log('Formato incorrecto, debe introducir un número');
    flagFormatoOk = false;
}

let alumnas = prompt('Introduce la cantidad de alumnas (mujeres): ');

alumnas = Number(alumnas);

if (Number.isNaN(alumnas)) {
    console.log('Formato incorrecto, debe introducir un número');
    flagFormatoOk = false;
}

if (flagFormatoOk) {
    if (alumnos < 0 || alumnas <0) {
        console.log('La cantidad de alumnos/as NO puede ser menor que 0!!');
    } else {
        let total = alumnos + alumnas;
        console.log(`El porcentaje de alumnos (varones) es: ${(alumnos/total*100).toFixed(2)}%.`);
        console.log(`El porcentaje de alumnas (mujeres) es: ${(alumnas/total*100).toFixed(2)}%.`);
    }
} else {
    console.log('Formatos incorrectos, no se puede calcular!');
}