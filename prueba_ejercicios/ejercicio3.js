// El  juego de adivinar un número. El valor a adivinar lo tendremos puesto 
// en una variable el valor que nosotros queramos.

// El número será entre 1 y 100. El programa debe dar pistas de si el número 
// a adivinar es mayor o menor que el introducido.

// Tendremos que hacer los siguientes subprocesos (funciones):

// leerNumero(): Pide un numero y hasta que el usuario no escribe un valor entre 1 y 100, 
// vuelve a pedir el valor.

// comprobarValor(numeroUsuario, numeroCorrecto): comprueba si el número es correcto; 
// éste  devuelve un número que puede ser:  0: los dos numeros son iguales  
// 1: el numeroUsuario es mayor que el numeroCorrecto  
// -1: el numeroUsuario es menor que el numeroCorrecto.

const prompt = require('prompt-sync')();

const numeroCorrecto = 28;

function leerNumero() {
    let numero;
    do {
        numero = Number(prompt("Introduce un número entre 1 y 100: "));
        if (isNaN(numero) || numero < 1 || numero > 100) {
            console.log("Valor no válido. Intente de nuevo.");
        }
    } while (isNaN(numero) || numero < 1 || numero > 100);

    return numero;
}

function comprobarValor(numeroUsuario, numeroCorrecto) {
    if (numeroUsuario === numeroCorrecto) {
        return 0;
    } else if (numeroUsuario > numeroCorrecto) {
        return 1;
    } else {
        return -1;
    }
}

let intentos = 0;
let acierto = false;

console.log("Bienvenido al juego de adivinar el número (1-100).");

do {
    const numeroUsuario = leerNumero();
    intentos++;

    const resultado = comprobarValor(numeroUsuario, numeroCorrecto);

    if (resultado === 0) {
        console.log(`¡Correcto! Has adivinado el número en ${intentos} intento(s).`);
        acierto = true;
    } else if (resultado === 1) {
        console.log("El número secreto es menor.");
    } else {
        console.log("El número secreto es mayor.");
    }
} while (!acierto);