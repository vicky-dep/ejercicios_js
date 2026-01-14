// 25. ¿Cuál es la diferencia principal entre Object.seal(obj) y Object.freeze(obj)? *

// A) seal no existe, solo freeze
// B) seal impide añadir/eliminar propiedades pero permite cambiar valores;
// freeze también impide cambiar valores
// C) seal hace una copia; freeze modifica el original
// D) seal solo afecta a propiedades numéricas

console.log('***FREEZE***'); // lo congelas tanto en estructura como en valores
const configFreeze = { modo: "dev" };
console.log(configFreeze);
Object.freeze(configFreeze);
configFreeze.modo = "prod";
console.log(configFreeze);
delete configFreeze.modo; // con delete borraria el argumento "modo", pero con FREEZE ni puedo eliminar ni modificar atributos
console.log('DESPUES DE DELETE modo');
console.log(configFreeze);

console.log('***SEAL***'); // me permite modificarlo pero no me permite eliminar el atributo "modo" (deja la estructura que no se pueda tocar)
const configSeal = { modo: "dev" };
console.log(configSeal);
Object.seal(configSeal);
configSeal.modo = "prod";
console.log(configSeal);
console.log('DESPUES DE DELETE modo');
delete configSeal.modo;
console.log(configSeal);