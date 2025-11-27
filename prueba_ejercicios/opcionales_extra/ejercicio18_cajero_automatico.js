// Escribir un programa modular que simule un cajero automático con las opciones de depósitos, retiros y ver saldo.

const prompt = require('prompt-sync')();

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
    
        if (opcion < 1 || opcion > 4 || Number.isNaN(opcion)) {
            console.log("Opción no válida. Inténtalo de nuevo.");
        }
    } while (opcion < 1 || opcion > 4 || Number.isNaN(opcion));

    return opcion;
    
}

function leerCantidadPositiva() {
    /* Pide una cantidad de dinero.
    Hasta que el usuario no escriba un valor mayor que 0, vuelve a pedir el valor.
    Devuelve la cantidad válida.*/

    let cantidad;

    do {
        cantidad = Number(prompt("Introduce una cantidad positiva de dinero: "));
        if (cantidad <= 0 || Number.isNaN(cantidad)) {
            console.log("Error: la cantidad debe ser un número mayor que 0.");
        }
    } while (cantidad <= 0 || Number.isNaN(cantidad));

    return cantidad;
}

function actualizarSaldo(saldo, cantidad, tipoOperacion) {
    /* Recibe el saldo actual, una cantidad y el tipo de operación ("ingreso" o "retiro").
    Si es un ingreso, suma la cantidad al saldo y devuelve el nuevo saldo.
    Si es un retiro:
    Si la cantidad es mayor que el saldo actual, la función no cambia el saldo y devolverá por ejemplo -1 para indicar error (saldo insuficiente).
    En caso contrario, resta la cantidad y devuelve el nuevo saldo.*/
    if (tipoOperacion === 'ingreso') {
        return saldo + cantidad;
    }
    if (tipoOperacion === 'retiro') {
        if (cantidad > saldo) {
            return -1; // significa saldo insuficiente
        }
        return saldo - cantidad;
    }
}

let saldo = 100;
let opcion;
    do {
        opcion = leerOpcionMenu();

        switch (opcion) {
            case 1:
                console.log(`Saldo actual: ${saldo} €`);
                break;
            case 2:
                let ingreso = leerCantidadPositiva();
                saldo = actualizarSaldo(saldo, ingreso, "ingreso");
                console.log(`Has ingresado ${ingreso} €. Nuevo saldo: ${saldo} €`);
                break;
            case 3:
                let retiro = leerCantidadPositiva();
                let nuevoSaldo = actualizarSaldo(saldo, retiro, "retiro");
                if (nuevoSaldo === -1) {
                    console.log("Saldo insuficiente. No se pudo realizar el retiro.");
                } else {
                    saldo = nuevoSaldo;
                    console.log(`Has retirado ${retiro} €. Nuevo saldo: ${saldo} €`);
                }
                break;
            case 4:
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    
    } while (opcion !== 4);