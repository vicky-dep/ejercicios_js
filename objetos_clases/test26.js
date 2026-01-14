// 26. ¿Qué hace la palabra clave delete en este ejemplo? *
// const persona = { nombre: "Ana", edad: 30 };
// delete persona.edad;
// A) Marca edad como undefined pero la propiedad sigue existiendo
// B) Elimina la propiedad edad del objeto (si es configurable)
// C) Elimina todas las propiedades del objeto
// D) Solo funciona en arrays, no en objetos

const persona = { nombre: "Ana", edad: 30 };
console.log(persona);
delete persona.edad; // borras el atributo edad
console.log(persona);

// JS dinamicamente permite agregar atributos
persona.nif = '74889632X'; // puedo añadir atributos con .nombre
console.log(persona);

// en JAVA tienes que utilizar API Reflection (si utilizas esta libreria puedes modificar TODO)