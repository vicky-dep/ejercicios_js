// Leer tres números que denoten una fecha (día, mes, año). 
// Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error. 
// Si es válida escribir la fecha cambiando el número del mes por su nombre. 
// Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0.

let prompt = require('prompt-sync')();

let flagFormatoOk = true;

let dia = prompt('Introduzca el día del mes (en número): ');

dia = Number(dia);

if (Number.isNaN(dia)) {
    console.log('Formato incorrecto, debe introducir un número');
    flagFormatoOk = false;
}

let mes = prompt('Introduzca el mes (en número): ');

mes = Number(mes);

if (Number.isNaN(mes)) {
    console.log('Formato incorrecto, debe introducir el mes en número');
    flagFormatoOk = false;
}

let anio = prompt('Introduzca el año: ');

anio = Number(anio);

if (Number.isNaN(anio)) {
    console.log('Formato incorrecto, debe introducir el año');
    flagFormatoOk = false;
}

let nombreMes = "";
let diasDelMes = 0;

switch (mes) {
  case 1:
    nombreMes = "enero";
    diasDelMes = 31;
    break;
  case 2:
    nombreMes = "febrero";
    diasDelMes = 28; // sin años bisiestos
    break;
  case 3:
    nombreMes = "marzo";
    diasDelMes = 31;
    break;
  case 4:
    nombreMes = "abril";
    diasDelMes = 30;
    break;
  case 5:
    nombreMes = "mayo";
    diasDelMes = 31;
    break;
  case 6:
    nombreMes = "junio";
    diasDelMes = 30;
    break;
  case 7:
    nombreMes = "julio";
    diasDelMes = 31;
    break;
  case 8:
    nombreMes = "agosto";
    diasDelMes = 31;
    break;
  case 9:
    nombreMes = "septiembre";
    diasDelMes = 30;
    break;
  case 10:
    nombreMes = "octubre";
    diasDelMes = 31;
    break;
  case 11:
    nombreMes = "noviembre";
    diasDelMes = 30;
    break;
  case 12:
    nombreMes = "diciembre";
    diasDelMes = 31;
    break;
  default:
    console.log("Mes no válido.");
}

if (flagFormatoOk) {
    if (anio <= 0) {
        console.log("El año debe ser mayor que 0.");
    } else if (mes < 1 || mes > 12) {
        console.log("El mes debe estar entre 1 y 12.");
    } else if (dia < 1 || dia > diasDelMes) {
        console.log(`El día debe estar entre 1 y ${diasDelMes}.`);
    } else {
        console.log(`La fecha es: ${dia} de ${nombreMes} de ${anio}.`);
    }
}