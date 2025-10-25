// Realizar algoritmo que nos diga si una persona puede acceder 
// a cursar un ciclo formativo de grado superior o no. 
// Para acceder a un grado superior, si se tiene un título de bachiller, 
// en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.

let prompt = require('prompt-sync')();

let bachiller = prompt('¿Tienes título de bachiller? (si/no): ');
bachiller = bachiller.toLowerCase();

let pruebaAcceso = prompt('¿Has superado una prueba de acceso? (si/no): ');
pruebaAcceso = pruebaAcceso.toLowerCase();

if (bachiller === 'si' || bachiller === 'sí') {
    console.log('La persona puede acceder a cursar un ciclo formativo de grado superior.');
} else if (pruebaAcceso === 'si' || pruebaAcceso === 'sí') {
    console.log('La persona puede acceder a cursar un ciclo formativo de grado superior.');
} else {
    console.log('La persona NO puede acceder a cursar un ciclo formativo de grado superior. Debe tener título de bachiller o haber superado una prueba de acceso.');
}