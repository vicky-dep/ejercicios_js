// Se necesita un sistema que despliegue un menú con 4 opciones, 
// si se presiona la opción 1, se calculará el área de un triángulo; 
// si se presiona la opción 2, se calculará el área de un cuadrado; 
// si se presiona la opción 3, se calculará el área de un círculo; 
// si se presiona la opción 4, será la única forma de salir del sistema.

// ------ Mi primer intento ------
/*
const prompt = require('prompt-sync')();
const opciones = Number(prompt("De qué figura quieres calcular el área? (1=triángulo, 2=cuadrado, 3=círculo, 4=salir): "));

switch (opciones) {
    case 1:
        let base = Number(prompt("Introduce la base del triángulo: "));
        let altura = Number(prompt("Introduce la altura del triángulo: "));
        console.log(`El área del triángulo es ${base*altura/2}`);
        break;
    case 2:
        let lado = Number(prompt("Introduce el lado del cuadrado: "));
        console.log(`El área del cuadrado es ${lado*lado}`);
        break;
    case 3:
        let radio = Number(prompt("Introduce el radio del círculo: "));
        console.log(`El área del círculo es ${Math.PI * radio * radio}`);
        break;
    case 4:
        break;
    default:
        console.log("Opción no válida. Intenta de nuevo.");
}
*/

// ---- INTENTO CON MENU Y FUNCIONES ----

const prompt = require('prompt-sync')();

function areaTriangulo() {
    const base = Number(prompt("Introduce la base del triángulo: "));
    const altura = Number(prompt("Introduce la altura del triángulo: "));
    return (base * altura) / 2;
}

function areaCuadrado() {
    const lado = Number(prompt("Introduce el lado del cuadrado: "));
    return lado * lado;
}

function areaCirculo() {
    const radio = Number(prompt("Introduce el radio del círculo: "));
    return Math.PI * radio * radio;
}

let opcion;

do {
    console.log(`
------ MENÚ ------
1. Área de un triángulo
2. Área de un cuadrado
3. Área de un círculo
4. Salir
------------------
`);

    opcion = Number(prompt("Elige una opción (1-4): "));

    switch (opcion) {
        case 1:
            console.log(`El área del triángulo es: ${areaTriangulo()}`);
            break;

        case 2:
            console.log(`El área del cuadrado es: ${areaCuadrado()}`);
            break;

        case 3:
            console.log(`El área del círculo es: ${areaCirculo()}`);
            break;

        case 4:
            console.log("Saliendo del sistema...");
            break;

        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }

} while (opcion !== 4);