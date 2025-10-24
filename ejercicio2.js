console.log('Hola');

let prompt = require('prompt-sync')();

let num1 = prompt('Introduzca numero:');


// prompt siempre devuelve un string
// console.log(typeof num1);
// al ser string + es operador de concatenacion
// console.log(num1+num1);

num1 = Number(num1);
// console.log(typeof num1);
// al ser number + es operador aritmetico (suma)
// console.log(num1+num1);

let num2 = prompt('Introduzca numero:');
num2 = Number(num2);

if (Number.isNaN(num1)) {
    console.log('Formato numero incorrecto');
    formatoOk = false;
}

if (Number.isNaN(num2)) {
    console.log('Formato numero incorrecto');
    formatoOk = false;
}

if (formatoOk) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let producto = num1 * num2;
    let division = num1 / num2;
    
    console.log(`suma = ${suma}, resta = ${resta}, producto = ${producto}, division = ${division}`);
    
    console.log('suma = ' + suma + ', resta = ' + resta);
}

