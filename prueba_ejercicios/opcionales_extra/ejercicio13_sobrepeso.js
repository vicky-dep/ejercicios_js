// Escribir un programa que indique si una persona tiene sobrepeso 
// ( si se considera que debe pesar el número de centímetros que mide menos 100 o menos) 
// Los datos deben ser positivos. 

const prompt = require('prompt-sync')();

let altura = Number(prompt("Introduce tu altura en centímetros: "));
let peso = Number(prompt("Introduce tu peso en kilogramos: "));

if (altura <= 0 || peso <= 0 || Number.isNaN(altura) || Number.isNaN(peso)) {
    console.log("Error: los datos deben ser positivos y numéricos.");
} else {
    const pesoIdeal = altura - 100;
    if (peso > pesoIdeal) {
        console.log(`Tienes sobrepeso. Tu peso debería ser ${pesoIdeal} kg o menos.`);
    } else {
        console.log(`No tienes sobrepeso. Según la fórmula, tu peso ideal máximo es ${pesoIdeal} kg.`);
    }
}