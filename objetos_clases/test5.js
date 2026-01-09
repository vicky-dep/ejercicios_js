// 5. ¿Cuál es la forma correcta de definir un método en una clase? *
// A) class Persona { function saludar() { console.log("Hola"); } }
// B) class Persona { saludar: function() { console.log("Hola"); } }
// C) class Persona { saludar() { console.log("Hola"); } }
// D) class Persona { let saludar = () => console.log("Hola"); }

class Persona { 
    saludar() { console.log("Hola"); 

    } 
}

let persona = new Persona();

persona.saludar();