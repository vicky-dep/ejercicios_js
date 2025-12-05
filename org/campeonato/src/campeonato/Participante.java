package campeonato;

public class Participante {
    
    // Atributos 
    private String nombre;
    private String apellidos;
    private int edad;
    private String direccion;
    private String telefono;

    // click derecho - source action - constructor (para instanciar un objeto de esta clase)
    public Participante() { // los valores por defecto cuando lo creas vacio, son null o 0 o false...

    }

    // solamente desde el contructor son accesibles sus atributos privados
    public Participante(String nombre, String apellidos, int edad, String direccion, String telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    // Getters & Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "Participante [nombre=" + nombre + ", apellidos=" + apellidos + ", edad=" + edad + ", direccion="
                + direccion + ", telefono=" + telefono + "]";
    }

}