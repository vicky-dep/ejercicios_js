// Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. 
// Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje 
// indicándonos que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.

const prompt = require('prompt-sync')();

const claveCorrecta = "eureka";
let acierto = false;

for (let i = 1; i <= 3; i++) {
    const clave = prompt(`Intento ${i}/3 - Introduzca la clave: `);
    
    if (clave === claveCorrecta) {
        acierto = true;
        break; // no son buena practica, mejor controlar con variables
    } else {
        console.log("Clave incorrecta.");
    }
}

if (acierto) {
    console.log("¡Clave correcta! Bienvenido.");
} else {
    console.log("Has agotado los 3 intentos.");
}

/*
otra manera:
const prompt = ...

cont clave = "eureka";
let intentos = 3;

do {
    let inpClave = prompt('Introduzca clave: '); 
    if (clave === inpClave) {
        console.log("Has encontrado la contraseña");
        intentos = 0;
    } else {
        console.log(`Contraseña incorrecta, intentos: ${--intentos}`); // antes de hacer la linea predecrementas el numero
        }
    }
} while (intentos > 0);
*/

/* 
---- ejemplo de funcion del profe ----

function repetir(c, n) {
    
    let str = '';

    for (let i = 0; i < n; i++) {
        str+=c;
    }
    return str;
}

console.log(repetir('*', 3));
*/