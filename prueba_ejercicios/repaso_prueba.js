// Desarrollar un algoritmo que permita ingresar el sueldo mensual de N empleado de una empresa.
// Se declaran las variables necesarias controlando su tipo y conversiones necesarias y su ámbito bloque.
// Primero se pedirá el número de empleados N, validando que sea mayor que 0. 
// Si el valor no es válido, se volverá a pedir.
// A continuación, para cada empleado se solicitará su sueldo en euros, validando que no sea negativo. 
// Si el sueldo es negativo, se vuelve a pedir el dato para ese empleado.
// Al finalizar las lecturas se mostrará un cuadro resumen con:
// Cantidad de empleados que cobran menos de 1000 €.
// Cantidad de empleados que cobran entre 1000 € y 2000 € (ambos incluidos).
// Cantidad de empleados que cobran más de 2000 €.
// El sueldo medio de todos los empleados.
// El sueldo máximo.
// El sueldo mínimo.

const prompt = require("prompt-sync")();
let n;
let sueldo;
let sueldosInfMil = 0;
let sueldosEntreMilDosMil = 0;
let sueldosSupDosMil = 0;
let sueldoMin = +Infinity;
let sueldoMax = -Infinity;
let suma = 0;

do {
    n = Number(prompt("Introduce la cantidad de empleados: "));
    if (n <= 0 || Number.isNaN(n)) {
        console.log("La cantidad debe ser un número mayor que 0.");
    }
} while (n <= 0 || Number.isNaN(n));

for (let i=1; i<=n; i++) {

    do {
        sueldo = Number(prompt(`Introduce el sueldo del empleado ${i}: `));
        if (sueldo < 0 || Number.isNaN(sueldo)) {
            console.log("El sueldo no puede ser negativo y debe ser un número válido.");
        }
    } while (sueldo < 0 || Number.isNaN(sueldo));

    if (sueldo < 1000) {
        sueldosInfMil++;
    } else if (sueldo > 2000) {
        sueldosSupDosMil++;
    } else {
        sueldosEntreMilDosMil++;
    }

    if (sueldo < sueldoMin) sueldoMin = sueldo;
    if (sueldo > sueldoMax) sueldoMax = sueldo;
    
    suma += sueldo;
}

let sueldoMedio = suma / n;

console.log(`\n=== RESUMEN DE SUELDOS ===`);
console.log(`Empleados totales: ${n}`);
console.log(`Menos de 1000€: ${sueldosInfMil}`);
console.log(`Entre 1000€ y 2000€: ${sueldosEntreMilDosMil}`);
console.log(`Más de 2000€: ${sueldosSupDosMil}`);
console.log(`Sueldo mínimo: ${sueldoMin}`);
console.log(`Sueldo máximo: ${sueldoMax}`);
console.log(`Sueldo medio: ${sueldoMedio}`);