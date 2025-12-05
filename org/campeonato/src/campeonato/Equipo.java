package campeonato; // toda clase en java tiene que empezar por el package

import java.util.Arrays;

public class Equipo {

    private String nombre;
    private String patrocinador;
    private String[] colorCamisetas = new String[2];
    private String categoria;
    
	public Equipo(String nombre, String patrocinador, String[] colorCamisetas, String categoria) {
		super();
		this.nombre = nombre;
		this.patrocinador = patrocinador;
		this.colorCamisetas = colorCamisetas;
		this.categoria = categoria;
	}

	public Equipo() {
		super();
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

	@Override
	public String toString() {
		return "Equipo [nombre=" + nombre + ", patrocinador=" + patrocinador + ", colorCamisetas="
				+ Arrays.toString(colorCamisetas) + ", categoria=" + categoria + "]";
	}
	
	
    
    

} 