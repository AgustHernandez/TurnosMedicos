package com.example.TurnosMedicos.configuration;

import com.example.TurnosMedicos.model.Especialidad;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.repository.IEspecialidadRepository;
import com.example.TurnosMedicos.repository.IEspecialistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    IEspecialistaRepository especialistaRepository;
    IEspecialidadRepository especialidadRepository;

    @Autowired
    public DataLoader(IEspecialistaRepository especialistaRepository,IEspecialidadRepository especialidadRepository) {
        this.especialistaRepository = especialistaRepository;
        this.especialidadRepository = especialidadRepository;
    }

    public void run(ApplicationArguments args) {
        if (especialistaRepository.findAll().isEmpty()) {
            //Creacion de especialidades ejemplo
//            Especialidad pediatria = new Especialidad("Pediatria");
//            Especialidad odontologia = new Especialidad("Odontologia");
//            Especialidad oftalmologia = new Especialidad("Oftalmología");
//            Especialidad clinicaMedica = new Especialidad("Clinica Medica");

//            especialidadRepository.save(pediatria);
//            especialidadRepository.save(odontologia);
//            especialidadRepository.save(oftalmologia);
//            especialidadRepository.save(clinicaMedica);

            //Creacion de especialsitas ejemplo
            especialistaRepository.save(new Especialista("74157", "Hernandez", "Agustina", new Especialidad("Clinica Medica")));
            especialistaRepository.save(new Especialista("73415", "Lopez", "Hernan", new Especialidad("Odontologia")));
            especialistaRepository.save(new Especialista("78415", "Gonzalez", "Pablo", new Especialidad("Clinica Medica")));
            especialistaRepository.save(new Especialista("77471", "Ramirez", "Jazmin", new Especialidad("Pediatria")));
            especialistaRepository.save(new Especialista("79415", "Perez", "Lucas", new Especialidad("Oftalmologia")));


        }
    }
}

