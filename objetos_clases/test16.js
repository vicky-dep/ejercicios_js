// 16. ¿Cuál es la forma correcta de acceder a una propiedad cuyo nombre

// contiene un guion (-)?
// const persona = {
// "nombre-completo": "Ana López"
// };
// Marca solo un óvalo.
// A) persona.nombre-completo
// B) persona["nombre-completo"]
// C) persona->["nombre-completo"]
// D) persona.nombre_completo

// Para crear objeto literal utilizo {}
const persona = {
    //para utilizar caracteres especiales en una clave hay que utilizar ""
    "nombre-completo": "Ana López"
};

console.log(persona["nombre-completo"]); // para acceder hay que utilizar []