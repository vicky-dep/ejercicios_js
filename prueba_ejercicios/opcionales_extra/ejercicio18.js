// Escribir un programa modular que simule un cajero automático con las opciones de depósitos, retiros y ver saldo.

const prompt = require('prompt-sync')();

let saldo = 100;

function leerOpcionMenu() {
    /* Muestra el menú y pide una opción al usuario.
    Valida que la opción esté entre 1 y 4; si no lo está, vuelve a pedirla.
    Devuelve la opción seleccionada.*/

    let opcion;
    do {
        console.log(`
    ------ MENÚ ------
    1. Consultar saldo
    2. Ingresar dinero
    3. Retirar dinero
    4. Salir
    ------------------
    `);
    
    opcion = Number(prompt("Elige una opción (1-4): "));
    
        switch (opcion) {
            case 1:
                console.log(`Opción seleccionada: ${opcion}`);
                break;
            case 2:
                console.log(`Opción seleccionada: ${opcion}`);
                leerCantidadPositiva();
                break;
            case 3:
                console.log(`Opción seleccionada: ${opcion}`);
                leerCantidadPositiva();
                break;
            case 4:
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    
    } while (opcion !== 4);
    
}

// leerOpcionMenu();

function leerCantidadPositiva() {
    /* Pide una cantidad de dinero.
    Hasta que el usuario no escriba un valor mayor que 0, vuelve a pedir el valor.
    Devuelve la cantidad válida.*/

    let cantidad;
    do {
        cantidad = Number(prompt("Introduce una cantidad de dinero: "));
    } while (cantidad <= 0);
    console.log(`La cantidad introducida es: ${cantidad}`);
    //return cantidad;
}

// leerCantidadPositiva();

function actualizarSaldo(saldo, cantidad, tipoOperacion) {
    /* Recibe el saldo actual, una cantidad y el tipo de operación ("ingreso" o "retiro").
    Si es un ingreso, suma la cantidad al saldo y devuelve el nuevo saldo.
    Si es un retiro:
    Si la cantidad es mayor que el saldo actual, la función no cambia el saldo y devolverá por ejemplo -1 para indicar error (saldo insuficiente).
    En caso contrario, resta la cantidad y devuelve el nuevo saldo.*/
    if (tipoOperacion == 2) {
        saldo+=cantidad;
    } else if (tipoOperacion == 3) {
        if (cantidad > saldo) {
            return -1; // significa saldo insuficiente
        } else {
            saldo-=cantidad;
        }
    }
}

// actualizarSaldo();