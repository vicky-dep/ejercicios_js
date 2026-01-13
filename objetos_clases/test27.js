// 27. ¿Cuál de estas define correctamente un getter en un objeto literal? *
// A) const persona = { getNombre() { return this.nombre; } };
// B) const persona = { getter nombre() { return this.nombre; } };
// C) const persona = { get nombre() { return this.nombre.toUpperCase(); } };
// D) const persona = { nombre.get() { return this.nombre; } };
const persona = { 
    name: 'josé',
    get nombre() { 
        return this.name.toUpperCase(); 
    }
};

console.log(persona.nombre);