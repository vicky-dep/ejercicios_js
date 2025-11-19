// Se necesita un sistema que calcula el salario semanal de n trabajadores, el cual depende de su puesto
// (licenciado, técnico y obrero), del turno (primero, segundo y tercero) y las horas trabajadas.
// Donde los del primer turno ganan 200€ adicionales a su salario, los del segundo 100€ y los del tercero 300€; 
// El obrero gana 30€ por hora, el técnico 50€ y el licenciado 100€.

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