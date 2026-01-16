// EJERCICIO 2
// Funciones contructoras
function Usuario(nombre, apellidos, email, dni, fechaNacimiento) {
    // this = {};
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.reservas = []; // coleccion con las reservas del usuario
    // this.__proto__ = Usuario.prototype;
    // return this;
}

Usuario.prototype.addReserva = function(reserva) {
    this.reservas.push(reserva);
}

// console.log(Usuario.toString());
// console.log(Usuario.prototype.addReserva.toString());

// Funcion constructora Reserva
function Reserva(fechaCreacion, fechaReserva, precio, usuario, pista) {
    // this = {};
    this.fechaCreacion = fechaCreacion;
    this.fechaReserva = fechaReserva;
    this.precio = precio;
    this.usuario = usuario;
    this.pista = pista;
    // this.__proto__ = Reserva.prototype;
    // return this;
}

// Funcion constructora Polideportivo
function Polideportivo(nombre, direccion, extension) {
    // this = {};
    this.nombre = nombre;
    this.direccion = direccion;
    this.extension = extension;
    this.pistas = [];
    // this.__proto__ = Polideportivo.prototype;
    // return this;
}

Polideportivo.prototype.addPista = function(pista) {
    this.pistas.push(pista);
}

// Funcion constructora Pista
function Pista(codigo, tipo, precio, fechaUltimaReserva, polideportivo) {
    // this = {};
    this.codigo = codigo;
    this.tipo = tipo;
    this.precio = precio;
    this.fechaUltimaReserva = fechaUltimaReserva;
    this.reservas = [];
    this.polideportivo = polideportivo;
    // this.__proto__ = Pista.prototype;
    // return this;
}

Pista.prototype.addReserva = function(reserva) {
    this.reservas.push(reserva);
}

// -------------------------------------------------------------------

const polideportivo1 = new Polideportivo(
    "Polideportivo Mijas", 
    "Calle Falsa 123, Mijas", 
    3500);

const pista1 = new Pista(
    "P001", 
    "Tenis", 
    20.00, 
    new Date(2024, 3, 10),
    polideportivo1);

polideportivo1.addPista(pista1);

const usuario1 = new Usuario("Juan", "Pérez", "j@email.com", "12345678A", new Date(1990, 5, 15));

//usuario1.addReserva(reserva1);

const reserva1 = new Reserva(
    new Date(), 
    new Date(2026, 11, 25), 
    150.00,
    usuario1,
    pista1);

pista1.addReserva(reserva1);

pista1.reservas.push(reserva1);

// Crea un usuario con tu nombre, crea polideportivo, pista y reserva asociada a ese usuario y pista
const usuario2 = new Usuario("Victoria", "Depaoli", "victoria@email.com", "11223344X", new Date(1990, 3, 28));

const polideportivo2 = new Polideportivo(
    "Polideportivo Fuengirola", 
    "Calle Mallorca 2, Fuengirola", 
    25000);

const pista2 = new Pista(
    "P002", 
    "Atletismo", 
    30.00, 
    new Date(2025, 12, 15),
    polideportivo2);

polideportivo2.addPista(pista2);

const reserva2 = new Reserva(
    new Date(), 
    new Date(2026, 2, 15), 
    35.00,
    usuario2,
    pista2);

pista2.reservas.push(reserva2);

usuario2.addReserva(reserva2);

console.log(usuario2);
console.log(polideportivo2);
console.log(pista2);
console.log(reserva2);