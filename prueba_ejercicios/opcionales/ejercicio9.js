// Realiza una calculadora de menú. El algoritmo mostrará un menú de operaciones aritméticas (+-*/,raíz) 
// y seguidamente a la elección de una operación solicitará los 2 operandos, mostrando el resultado por 
// pantalla e informando de nuevo con el menú.
// El menú además de las operaciones básicas tendrá que tener una opción de salida que se indicará con 
// la letra q.

const prompt = require('prompt-sync')();

function suma(op1, op2) {
    return op1 + op2;
}

function resta(op1, op2) {
    return op1 - op2;
}

function producto(op1, op2) {
    return op1 * op2;
}

function division(op1, op2) {
    if (op2 === 0) return "Error: no es posible dividir por 0";
    return op1 / op2;
}

function raiz(op1) {
    return Math.sqrt(op1);
}

let opcion;

do {
    console.log(`
------ MENÚ ------
Operaciones aritméticas:
1. Suma
2. Resta
3. Multiplicación
4. División
5. Raíz cuadrada
q. Salir
------------------
`);

    opcion = prompt("Elige una opción: ");

    switch (opcion) {
        case "1":
            op1 = Number(prompt("Introduce el primer operando: "));
            op2 = Number(prompt("Introduce el segundo operando: "));
            console.log(`La suma de ${op1} y ${op2} es: ${suma(op1, op2)}`);
            break;

        case "2":
            op1 = Number(prompt("Introduce el primer operando: "));
            op2 = Number(prompt("Introduce el segundo operando: "));
            console.log(`La resta de ${op1} y ${op2} es: ${resta(op1, op2)}`);
            break;

        case "3":
            op1 = Number(prompt("Introduce el primer operando: "));
            op2 = Number(prompt("Introduce el segundo operando: "));
            console.log(`La multiplicación de ${op1} y ${op2} es: ${producto(op1, op2)}`);
            break;

        case "4":
            op1 = Number(prompt("Introduce el primer operando: "));
            op2 = Number(prompt("Introduce el segundo operando: "));
            console.log(`La división de ${op1} y ${op2} es: ${division(op1, op2)}`);
            break;
        case "5":
            op1 = Number(prompt("Introduce el primer operando: "));
            console.log(`La raíz cuadrada de ${op1} es: ${raiz(op1)}`);
            break;
        case "q":
            console.log("Saliendo del sistema...");
        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }

} while (opcion !== "q");