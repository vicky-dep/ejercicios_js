// Desarrolla un algoritmo que cuente hasta 10.

// Patron contador

// Se inicializa a 0
let contador = 0; // typeof contador === 'number'

// contador interviene en la condicion como variable centinela
// con el limite de la cuenta
while (contador < 10) {

    // Procesamiento
    console.log(`Iteración ${contador+1}`);
    

    // Al final del bucle se produce un incremento de contador
    contador = contador +1;
}

for (let i = 0; i < 10; i++) {
    console.log(`Iteración ${+i+1}`);
}

let i = 0;
while (i< 10) {
    console.log(`Iteración ${+i+1}`);
    i++; // i = i + 1; 
}

contador = 0;
do {
    console.log(`Iteración ${contador+1}`);
    contador = contador +1;
} while (contador < 10);