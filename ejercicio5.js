// Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, 
// se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá calcular su cuadrado 
// y la raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario 
// y su resultado («Del número X, su potencia es X y su raíz X» ). 
// Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.

let prompt = require('prompt-sync')();

let flagFormatoOk = true;

let num = prompt('Introduzca un número: ');

num = Number(num);

if (Number.isNaN(num)) {
    console.log('Formato incorrecto, debe introducir un número');
    flagFormatoOk = false;
}

if (flagFormatoOk) {
    if (num <= 0) {
        console.log('El número debe ser mayor que 0');
    } else {
        cuadrado = num ** 2;
        raiz = num * 0.5; 
        console.log(`La potencia de ${num} es ${cuadrado} y su raíz cuadrada es ${raiz}`);
    }
}