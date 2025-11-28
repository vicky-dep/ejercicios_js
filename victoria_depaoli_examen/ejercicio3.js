// Ejercicio 3: código secreto de caja fuerte con 2 dígitos 

const prompt = require("prompt-sync")();

function jugarCajaFuerte() {
    
    console.log("La clave está formada por 2 dígitos de 0 a 9.");
    
    let dig1Secreto = generarDigitoSecreto();
    let dig2Secreto = generarDigitoSecreto();


    leerIntento();
    evaluarIntento();

    let intento;
    while (codSecreto != intento) {
        intento = leerIntento();
        evaluarIntento(codSecreto, intento);
    }
    
    console.log("¡Has abierto la caja fuerte! Has acertado la clave.");
    
}



function generarDigitoSecreto() {
    let digSecreto = Math.floor(Math.random()*10);
    return digSecreto;
}

/*
function generarCodigoSecreto() {
    let dig1 = generarDigitoSecreto(0,9);
    let dig2 = generarDigitoSecreto(0,9);
}
*/

function leerIntento() {

    do {

        dig1Usuario = Number(prompt("Introduce el primer dígito: "));
        dig2Usuario = Number(prompt("Introduce el segundo dígito: "));
        
        if (dig1Usuario > 9 || dig1Usuario < 0 || dig2Usuario > 9 || dig2Usuario < 0 || Number.isNaN(dig1Usuario) || Number.isNaN(dig2Usuario)) {
            console.log("Cada dígito debe ser un número entre 0 y 9");
        }
    
    } while (dig1Usuario > 9 || dig1Usuario < 0 || dig2Usuario > 9 || dig2Usuario < 0 || Number.isNaN(dig1Usuario) || Number.isNaN(dig2Usuario));

}

function evaluarIntento(digitoSecreto, intento) {
    

}

