// Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. 
// Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje 
// indicándonos que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.

function repetir(c, n) {
    
    let str = '';

    for (let i = 0; i < n; i++) {
        str+=c;
    }
    return str;
}

console.log(repetir('*', 3));