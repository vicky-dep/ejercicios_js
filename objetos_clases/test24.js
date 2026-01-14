// 24. Dado:
// *
// const config = { modo: "dev" };
// Object.freeze(config);
// config.modo = "prod";
// En modo no estricto, ¿qué ocurre?
// Marca solo un óvalo.
// A) Cambia config.modo a "prod"
// B) Lanza siempre una excepción
// C) El valor no cambia, sigue siendo "dev"
// D) Se borra la propiedad modo

const config = { modo: "dev" };
Object.freeze(config); // si congelo un objeto, podre cambiarlo? 
config.modo = "prod"; // no se puede alterar

console.log(config);