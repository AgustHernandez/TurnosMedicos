package com.example.TurnosMedicos.security;

import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.repository.IEspecialistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private IEspecialistaRepository EspecialistaRepository;

    @Autowired
    public DataLoader(IEspecialistaRepository especialistaRepository) {
        this.EspecialistaRepository = especialistaRepository;
    }

    public void run(ApplicationArguments args) {

        EspecialistaRepository.save(new Especialista("Perez", "Juan"));
        EspecialistaRepository.save(new Especialista("Martinez", "Pablo"));
    }
}