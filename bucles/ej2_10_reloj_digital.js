// Realiza un reloj digital que nunca pare. También debes hacer que espere 
// un segundo real para darle más realismo.
// Nota: utiliza la instrucción Esperar num_seg Segundos para implementar, 
// para limpiar entre segundos se puede utilizar: Limpiar Pantalla

let horas = 0;
let minutos = 0;
let segundos = 0;

console.clear();

setInterval(() => {
    console.clear();

    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    if (horas === 24) {
        horas = 0;
    }

    console.log(`${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);
}, 1000);