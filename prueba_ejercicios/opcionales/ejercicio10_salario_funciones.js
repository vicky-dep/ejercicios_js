// Se necesita un sistema que calcula el salario semanal de n trabajadores, el cual depende de su puesto
// (licenciado, técnico y obrero), del turno (primero, segundo y tercero) y las horas trabajadas.
// Donde los del primer turno ganan 200€ adicionales a su salario, los del segundo 100€ y los del tercero 300€; 
// El obrero gana 30€ por hora, el técnico 50€ y el licenciado 100€.
/*
const prompt = require('prompt-sync')();

// función que calcula el salario según el puesto y las horas trabajadas
function salarioPorPuesto(puesto, hsTrabajadas) {
    if (puesto === 1) {        // obrero
        return hsTrabajadas * 30;
    } else if (puesto === 2) { // técnico
        return hsTrabajadas * 50;
    } else if (puesto === 3) { // licenciado
        return hsTrabajadas * 100;
    } else {
        return 0; // puesto inválido
    }
}

// función que devuelve el adicional según el turno
function adicionalPorTurno(turno) {
    if (turno === 1) {         // primero
        return 200;
    } else if (turno === 2) {  // segundo
        return 100;
    } else if (turno === 3) {  // tercero
        return 300;
    } else {
        return 0; // turno inválido
    }
}

const n = Number(prompt("¿Cuántos trabajadores hay en la empresa?: "));

let contador = 1;
let totalEmpresa = 0;

while (contador <= n) {
    
    console.log(`Trabajador ${contador}:`);

    const hsTrabajadas = Number(prompt("¿Cuántas horas has trabajado la semana pasada?: "));
    const puesto = Number(prompt("¿En qué puesto te encuentras? (1=obrero, 2=tecnico, 3=licenciado): "));
    const turno = Number(prompt("¿En qué turno has trabajado? (1=primero, 2=segundo, 3=tercero): "));

    const salarioBase = salarioPorPuesto(puesto, hsTrabajadas);
    const adicional = adicionalPorTurno(turno);
    const salarioSemanal = salarioBase + adicional;

    console.log(`El salario de la semana pasada del trabajador ${contador} fue: ${salarioSemanal} €`);

    totalEmpresa += salarioSemanal;
    contador++;
}

console.log(`El gasto total de la empresa en salarios la semana pasada fue: ${totalEmpresa} €`);
*/
// ---- VERSION EN CLASE ----

const prompt = require('prompt-sync')();

function leerPuesto(mensaje) {
    let puesto;
    do {
        puesto = prompt(mensaje);
        if (puesto != 'licenciado' && puesto != 'tecnico' && puesto != 'obrero') {
            console.log('Entrada incorrecta. Introduzca puesto: licenciado, tecnico y obrero.');
        }
    } while (puesto != 'licenciado' && puesto != 'tecnico' && puesto != 'obrero');
    
    return puesto;
}

function leerTurno(mensaje) {
    let turno;
    do {
        turno = prompt(mensaje);
        if (turno != 'primero' && turno != 'segundo' && turno != 'tercero') {
            console.log('Entrada incorrecta. Introduzca turno: primero, segundo y tercero.');
        }
    } while (turno != 'primero' && turno != 'segundo' && turno != 'tercero');
    
    return turno;
}

function leerNumValido(mensaje) {
    let num;

    do {
        num = Number(prompt(mensaje));
        if (Number.isNaN(num)) {
            console.log('Error formato no numérico. Vuelve a introducir número.');
        }
    } while (Number.isNaN(num));

    return num;
}

let numTrabajadores = leerNumValido('Introduzca número de trabajadores: ');

let contador = 0;
let suma = 0;
let max = -Infinity;
let min = Infinity;
let media;

while (contador < numTrabajadores) {
    let puesto = leerPuesto('Introduzca puesto (licenciado, tecnico y obrero): ')
    let turno = leerTurno('Introduzca turno (primero, segundo y tercero): ');
    let horas = leerNumValido('Introduzca horas trabajadas: ');

    let sueldoBase;
    if (puesto == 'obrero') {
        sueldoBase = horas * 30;
    } else if (puesto == 'tecnico') {
        sueldoBase = horas * 50;
    } else {
        // if (puesto == 'licenciado')
        sueldoBase = horas * 100;
    }

    if (turno == 'primero') {
        sueldoBase += 200;
    } else if (turno == 'segundo') {
        sueldoBase += 100;
    } else {
        sueldoBase += 300;
    }

    if (sueldoBase < min) {
        min = sueldoBase;
    }
    if (sueldoBase > max) {
        max = sueldoBase;
    }

    contador++;
    suma += sueldoBase;

    console.log(`Trabajador ${contador} cobra ${sueldoBase}`);
    
}

console.log(`El sueldo maximo es: ${max}`);
console.log(`El sueldo minimo es: ${min}`);
console.log(`La media es: ${suma/numTrabajadores}`);