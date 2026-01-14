// 27. ¿Cuál de estas define correctamente un getter en un objeto literal? *
// A) const persona = { getNombre() { return this.nombre; } };
// B) const persona = { getter nombre() { return this.nombre; } };
// C) const persona = { get nombre() { return this.nombre.toUpperCase(); } };
// D) const persona = { nombre.get() { return this.nombre; } };
const persona = { 
    name: 'josé',
    get nombre() { 
        return this.name.toUpperCase(); // con get solo puedes leer (readonly)
    },
    set nombreEnMinusculas(nombre) {
        this.name = nombre.toLowerCase(); // con set si puedes escribir
    }
};

console.log(persona.name);
console.log(persona.nombre);
persona.nombreEnMinusculas = 'JOSE MANUEL';
console.log(persona.name);


// la gracia del getter es que puedes transformar ese codigo