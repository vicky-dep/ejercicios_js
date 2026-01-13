// 30. ¿Qué diferencia hay entre estas dos definiciones de método? *
// const persona1 = {
//     nombre: "Ana",
//     saludar() {
//         console.log("Hola, soy " + this.nombre);
//     }
// };
// const persona2 = {
//     nombre: "Ana",
//     saludar: () => {
//         console.log("Hola, soy " + this.nombre);
//     }
// };
//
// A) No hay diferencia, se comportan igual
// B) En persona2, this no apunta al objeto sino al contexto léxico exterior
// C) En persona1, this está prohibido
// D) En persona2, saludar se convierte automáticamente en método estático

const persona1 = {
    nombre: "Ana",
    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
};

//this a nivel de script es atrapado dentro de la arrow function
this.nombre = 'Pepe';
const persona2 = {
    nombre: "Ana",
    saludar: () => {
        console.log("Hola, soy " + this.nombre);
    }
};

persona1.saludar();
persona2.saludar();

console.log(this);