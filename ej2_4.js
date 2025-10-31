// Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. 
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10

const prompt = require('prompt-sync')(); // devuelve una funcion prompt

let n = prompt('Introduzca n: '); // devuelve tipo string 

n = Number(n); // lo convertimos

if (!Number.isNaN(n)) {
    // entro porque n es Number

    // el contador tiene siempre la inicializacion, la condicion y el incremento y se utiliza con una estructura repetitiva
    let contador = 0; 

    let acumulador = 0; 

    while (contador <= 2*n) {

        console.log('===============');
        console.log(`contador = ${contador}`);
        console.log(`acumulador = ${acumulador}`);
    
        if (contador % 2 === 0) {
            // si estamos aquie es porque contador es par
            console.log(`contador par`);
            
            acumulador += contador; 
            console.log(`Incremento acumulador`);
            
        }

        contador++;
    }

    console.log(`Total de nº pares + ${acumulador}`);
    

    } else {
    console.log('n no es un número');
}