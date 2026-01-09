// 12. ¿Cómo se define un método estático en una clase? *

// A) class Util { static sumar(a, b) { return a + b; } }
// B) class Util { sumar static(a, b) { return a + b; } }
// C) class Util { sumar(a, b) static { return a + b; } }
// D) class Util { this.static.sumar = function(a, b) { return a + b; } }

// estatico es un sinonimo de global (solo se invoca llamando a la clase)
class Util { 
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Util.sumar(1,2));