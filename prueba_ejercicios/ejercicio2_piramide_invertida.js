// Escribe una función en la que dibuje una pirámide invertida en pantalla 
// como la de la figura. La altura se pasará como parámetro. 
// Si se pasa una altura =0 o negativa, la función devolverá –1; 
// en caso contrario devolverá 0 (éxito) y pintará la pirámide.

/*
Ejemplo altura 5:
*********
 *******
  *****
   ***
    *
*/

function dibujarPiramideInvertida(altura) {
    if (altura <= 0) {
        console.log("La altura debe ser mayor que 0.");
        return -1; // error
    }

    for (let i = 1; i <= altura; i++) {
        const espacios = ' '.repeat(i - 1);
        const asteriscos = '*'.repeat(2 * (altura - i) + 1);
        console.log(espacios + asteriscos);
    }

    return 0; // éxito
}

dibujarPiramideInvertida(5);