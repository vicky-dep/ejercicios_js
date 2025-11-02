// Solicita por teclado tres números; si el primero es negativo, 
// muestra el producto de los tres y si no lo es, muestra la suma.

let prompt = require('prompt-sync')();

let flagFormatoOk = true;

let a = prompt('Introduzca a:');

a = Number(a);

if (Number.isNaN(a)) {
    console.log('Formato incorrecto!!');
    flagFormatoOk = false;
}

let b = prompt('Introduzca b:');

b = Number(b);

if (Number.isNaN(b)) {
    console.log('Formato incorrecto!!');
    flagFormatoOk = false;
}

let c = prompt('Introduzca c:');

c = Number(c);

if (Number.isNaN(c)) {
    console.log('Formato incorrecto!!');
    flagFormatoOk = false;
}

if (flagFormatoOk) {
    if (a < 0) {
        console.log(`El producto es ${a*b*c}`);
    } else {
        console.log(`La suma es ${a+b+c}`);
    }
} else {
    console.log('Formatos incorrectos, no se puede calcular!');
}