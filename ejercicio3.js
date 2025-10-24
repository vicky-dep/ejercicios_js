// Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.

// Forma nativa de importar modulos en node
// Estas exportando la funcion create y esa funcion es la que obtiene prompt
// Invocas una funcion que devuelve otra funcion


//           create________________()
let prompt = require('prompt-sync')();

// Formato de variable camelCase
let flagFormatoOk = true;

let a = prompt('Introduzca a:');

a = Number(a);

// Validacion
if (Number.isNaN(a)) {
    console.log('Formato incorrecto!!');
    flagFormatoOk = false;
}

let b = prompt('Introduzca b:');

b = Number(b);

// Validacion
if (Number.isNaN(b)) {
    console.log('Formato incorrecto!!');
    flagFormatoOk = false;
}

if (flagFormatoOk) {
    // validacion de numero OK, luego hago el procesamiento/calculos
    if (a > b) {
        // Backtip ` se realiza interpolacion de cadena, frente a concatenacion 
        console.log(`El mayor es ${a}`);
    } else if (a == b) {
        console.log('Son iguales');
    } else {
        console.log(`El mayor es ${b}`);
    }
} else {
    console.log('Formatos incorrectos, no se puede calcular!');
}