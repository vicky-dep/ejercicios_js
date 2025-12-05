package campeonato;

public class Main {
    
    public static void main(String[] args) {
        
        Participante participanteAlexander = new Participante();

        IO.println(participanteAlexander);

        participanteAlexander.setNombre("Alexander");
        participanteAlexander.setApellidos("apellido1");

        IO.println(participanteAlexander);

        Participante participanteJose = new Participante("Jose", "Martin", 40, "Mijas", "600123456");

        IO.println(participanteJose);

    }
}
