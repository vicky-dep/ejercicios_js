// Escribir un programa que sume la serie 3,6,9 hasta 99 y despliegue su resultado.

let suma = 0;

for (i=3; i<=99; i+=3) {
    suma += i;
} 
console.log(`La suma de la serie desde 3 hasta 99 (de 3 en 3) es: ${suma}`);