// 25. ¿Cuál es la diferencia principal entre Object.seal(obj) y Object.freeze(obj)? *

// A) seal no existe, solo freeze
// B) seal impide añadir/eliminar propiedades pero permite cambiar valores;
// freeze también impide cambiar valores
// C) seal hace una copia; freeze modifica el original
// D) seal solo afecta a propiedades numéricas

console.log('***FREEZE***');
const configFreeze = { modo: "dev" };
console.log(configFreeze);
Object.freeze(configFreeze);
configFreeze.modo = "prod";
console.log(configFreeze);
delete configFreeze.modo;
console.log('DESPUES DE DELETE modo');
console.log(configFreeze);

console.log('***SEAL***');
const configSeal = { modo: "dev" };
console.log(configSeal);
Object.seal(configSeal);
configSeal.modo = "prod";
console.log(configSeal);
console.log('DESPUES DE DELETE modo');
delete configSeal.modo;
console.log(configSeal);