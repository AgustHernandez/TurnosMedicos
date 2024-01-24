package com.example.TurnosMedicos.configuration;

import com.example.TurnosMedicos.model.AppUser;
import com.example.TurnosMedicos.model.AppUserRole;
import com.example.TurnosMedicos.model.Especialidad;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.repository.IEspecialidadRepository;
import com.example.TurnosMedicos.repository.IEspecialistaRepository;
import com.example.TurnosMedicos.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    IEspecialistaRepository especialistaRepository;
    IEspecialidadRepository especialidadRepository;
    IUserRepository userRepository;

    @Autowired
    public DataLoader(IUserRepository userRepository, IEspecialistaRepository especialistaRepository,IEspecialidadRepository especialidadRepository) {
        this.especialistaRepository = especialistaRepository;
        this.especialidadRepository = especialidadRepository;
        this.userRepository = userRepository;
    }

    public void run(ApplicationArguments args) {

        if (especialistaRepository.findAll().isEmpty()) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            String password = passwordEncoder.encode("sa");
            BCryptPasswordEncoder passwordEncoder2 = new BCryptPasswordEncoder();
            String password2 = passwordEncoder2.encode("sa");
            userRepository.save(new AppUser("Admin", "Admin", "admin@digital.com", password, AppUserRole.ROLE_ADMIN));
            userRepository.save(new AppUser("User", "User", "user@digital.com", password2, AppUserRole.ROLE_USER));
            //Creacion de especialsitas ejemplo
            especialistaRepository.save(new Especialista("74157", "Hernandez", "Agustina", new Especialidad("Clinica Medica")));
            especialistaRepository.save(new Especialista("73415", "Lopez", "Hernan", new Especialidad("Odontologia")));
            especialistaRepository.save(new Especialista("78415", "Gonzalez", "Pablo", new Especialidad("Clinica Medica")));
            especialistaRepository.save(new Especialista("77471", "Ramirez", "Jazmin", new Especialidad("Pediatria")));
            especialistaRepository.save(new Especialista("79415", "Perez", "Lucas", new Especialidad("Oftalmologia")));


        }
    }
}

