// Desarrollar un algoritmo que permita ingresar la cantidad de hijos de N personas 
// de una empresa, donde ninguno de ellos es pareja de otro, validando que este valor 
// no sea negativo. Se declararán las variables junto con su tipo y ámbito bloque.

// Por tanto, se pedirá el número de personas, cada pareja sólo cuenta una, y a 
// continuación, se solicitará el número de hijos por cada persona.

// Luego mostrar un cuadro resumen con la cantidad de personas que tienen hijos 
// y los que no. Además, mostrar el promedio de hijos por persona, número máximo de hijos, 
// el número mínimo de hijos.

const prompt = require('prompt-sync')();

let numPersonas = Number(prompt('Introduzca el número de personas en la empresa: '));

if (isNaN(numPersonas) || numPersonas <= 0) {
    console.log("Debe ingresar un número válido mayor que 0.");
} else {
    let personasConHijos = 0;
    let personasSinHijos = 0;
    let sumaHijos = 0;
    let maxHijos;
    let minHijos;

    for (let i = 1; i <= numPersonas; i++) {
        let hijos;
        do {
            hijos = Number(prompt(`Persona ${i}: número de hijos (>= 0): `));
            if (isNaN(hijos) || hijos < 0) {
                console.log("Valor no válido. Intente de nuevo.");
            }
        } while (isNaN(hijos) || hijos < 0);

        sumaHijos += hijos;

        if (hijos > 0) {
            personasConHijos++;
        } else {
            personasSinHijos++;
        }

        if (i === 1) {
            maxHijos = hijos;
            minHijos = hijos;
        } else {
            if (hijos > maxHijos) maxHijos = hijos;
            if (hijos < minHijos) minHijos = hijos;
        }
    }

    let promedio = sumaHijos / numPersonas;

    console.log(`Personas con hijos: ${personasConHijos}`);
    console.log(`Personas sin hijos: ${personasSinHijos}`);
    console.log(`Promedio de hijos por persona: ${promedio.toFixed(2)}`);
    console.log(`Máximo de hijos: ${maxHijos}`);
    console.log(`Mínimo de hijos: ${minHijos}`);
}

/* solucion de clase: --- PROBAR !
const prompt = require('prompt-sync')();

const n = Number(prompt('Introduce los trabajadores de la empresa: '));

let hijos = 0;
let contador = 0;
let max = 0;
let min = Infinity;
let sumaHijos = 0;

for (let i = 1; i <= n; i++) {
    hijos = Number(prompt("Cuantos hijos tiene: "));
    contador++;
    sumaHijos += hijos;

    if (hijos > max) {
        max = hijos;    
    }
    if (hijos < min) {
        min = hijos;    
    }
}
media = sumaHijos / contador;
console.log("Empleados: " + n + " hijos total: " + sumaHijos + " promedio hijos: " + )

*/