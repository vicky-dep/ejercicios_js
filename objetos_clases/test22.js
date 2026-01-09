// 22. ¿Qué hace Object.assign en este caso?
// *
// const destino = { a: 1 };
// const fuente = { b: 2 };
// const resultado = Object.assign(destino, fuente);

// A) Crea un nuevo objeto y deja destino intacto
// B) Modifica destino añadiendo b: 2 y resultado referencia a destino
// C) Modifica fuente añadiendo a: 1
// D) No hace nada si ya existe a

const destino = { a: 1 };
const fuente = { b: 2 };
const resultado = Object.assign(destino, fuente);

console.log(destino);