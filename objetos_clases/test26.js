// 26. ¿Qué hace la palabra clave delete en este ejemplo? *
// const persona = { nombre: "Ana", edad: 30 };
// delete persona.edad;
// A) Marca edad como undefined pero la propiedad sigue existiendo
// B) Elimina la propiedad edad del objeto (si es configurable)
// C) Elimina todas las propiedades del objeto
// D) Solo funciona en arrays, no en objetos

const persona = { nombre: "Ana", edad: 30 };
console.log(persona);
delete persona.edad;
console.log(persona);