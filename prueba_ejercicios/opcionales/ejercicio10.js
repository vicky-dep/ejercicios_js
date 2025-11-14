// Se necesita un sistema que calcula el salario semanal de n trabajadores, el cual depende de su puesto
// (licenciado, técnico y obrero), del turno (primero, segundo y tercero) y las horas trabajadas.
// Donde los del primer turno ganan 200€ adicionales a su salario, los del segundo 100€ y los del tercero 300€; 
// El obrero gana 30€ por hora, el técnico 50€ y el licenciado 100€.
/*
primero pregunto por n
para cada n, puesto, turno y hs trabajadas
salario semanal ??

licenciado = hs_semanales_trabajadas * 100
tecnico = hs_semanales_trabajadas * 50
obrero = hs_semanales_trabajadas * 30

primer_turno + 200
segundo_turno + 100
tercer_turno + 300
*/

const prompt = require('prompt-sync')();

const n = Number(prompt("¿Cuántos trabajadores hay en la empresa?: "));

let contador = 1;

while (contador < n+1) {
    let hsTrabajadas = Number(prompt("¿Cuántas horas has trabajado la semana pasada?: "));
    let puesto = Number(prompt("¿En qué puesto te encuentras? (1=obrero, 2=tecnico, 3=licenciado): "));
    let turno = Number(prompt("¿En qué turno has trabajado? (1=primero, 2=segundo, 3=tercero): "));
    contador++;
}

console.log(`El salario de la semana pasada es: ${totalSalarioSemanal}`);

let salarioPorHoras;
let totalSalarioSemanal;

function puesto() {
    if (puesto === 1) { // 1: obrero
        salarioPorHoras = hsTrabajadas * 30;
        return salarioPorHoras    
    } else if (puesto === 2) { // 2: tecnico
        salarioPorHoras = hsTrabajadas * 50;
        return salarioPorHoras    
    } else { // 3: licenciado
        salarioPorHoras = hsTrabajadas * 100;
        return salarioPorHoras   
    }
}

function adicionalPorTurno() {
    if (turno === 1) {
        totalSalarioSemanal = salarioPorHoras + 200;
        return totalSalarioSemanal;
    } else if (turno === 2) {
        totalSalarioSemanal = salarioPorHoras + 100;
        return totalSalarioSemanal;
    } else {
        totalSalarioSemanal = salarioPorHoras + 300;
        return totalSalarioSemanal;
    }
}