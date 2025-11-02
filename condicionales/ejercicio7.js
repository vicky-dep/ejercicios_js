// Una tienda ofrece un descuento del 15% sobre el total de la compra 
// durante el mes de octubre. Dado un mes y un importe, calcular 
// cuál es la cantidad que se debe cobrar al cliente.

let prompt = require('prompt-sync')();
let flagFormatoOk = true;

let mesesValidos = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let compra = prompt('Introduce el importe total de la compra: ');

compra = Number(compra);

if (Number.isNaN(compra)) {
    console.log('Formato incorrecto, debe introducir el importe a pagar');
    flagFormatoOk = false;
}

let mes = prompt('Introduce el mes actual: ');

mes = mes.toLowerCase();

if (!mesesValidos.includes(mes)) {
    console.log('El mes introducido no es válido. Debe ser un mes del año (por ejemplo: enero).');
    flagFormatoOk = false;
}

if (flagFormatoOk) {
    if (compra <= 0) {
        console.log('El importe total NO puede ser menor que 0!!');
        flagFormatoOk = false;
    } else if (mes == 'octubre') {
        console.log(`Con el descuento del 15% del mes de ${mes}, el importe a cobrar es: ${(compra*0.85).toFixed(2)}.`);
    } else {
        console.log(`El importe a cobrar es: ${compra.toFixed(2)}.`);
    }
}