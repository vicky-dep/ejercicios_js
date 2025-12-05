package iesvdm.campeonato; // toda clase en java tiene que empezar por el package

import java.util.Arrays;

public class Equipo {

    // Atributos == ESTADO
    private String nombre;
    private String patrocinador;
    private String[] colorCamisetas = new String[2];
    private String categoria;

    private int numeroJugadores = 0;
    private Participante[] jugadores = new Participante[512]; // buffer de Participante

    // Metodos == COMPORTAMIENTO; ACCIONES QUE CAMBIAN EL ESTADO DEL OBJETO

    // CONSTRUCTORES
    public Equipo() { // tienen el mismo nombre de la clase pero no contienen nada
    }

    public Equipo(String nombre, String patrocinador, String[] colorCamisetas, String categoria) {
        this.nombre = nombre;
        this.patrocinador = patrocinador;
        this.colorCamisetas = colorCamisetas;
        this.categoria = categoria;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPatrocinador() {
        return patrocinador;
    }

    public void setPatrocinador(String patrocinador) {
        this.patrocinador = patrocinador;
    }

    public String[] getColorCamisetas() {
        return colorCamisetas;
    }

    public void setColorCamisetas(String[] colorCamisetas) {
        this.colorCamisetas = colorCamisetas;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getNumeroJugadores() {
        return numeroJugadores;
    }

    public Participante[] getJugadores() {
        return jugadores;
    }

    @Override
    public String toString() {
        String equipo = "Equipo [nombre=" + nombre + ", patrocinador=" + patrocinador + ", colorCamisetas="
                + Arrays.toString(colorCamisetas) + ", categoria=" + categoria + ", numeroJugadores=" + numeroJugadores
                + ", jugadores=" + Arrays.toString(jugadores) + "]";
        for (int i=0; i < numeroJugadores; i++) {
            equipo+= jugadores[i] + ", ";
        }
        equipo+= "]";
        return equipo;
    }

    // comportamiento
    public void aniadirJugador(Participante participante) {
        this.jugadores[numeroJugadores++] = participante;
        // this.jugadores[numeroJugadores] = participantes;
        // numeroJugadores++;
    }


} 