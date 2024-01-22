package com.example.TurnosMedicos.repository;

import com.example.TurnosMedicos.model.Especialidad;
import com.example.TurnosMedicos.model.Especialista;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface IEspecialidadRepository extends JpaRepository<Especialidad, Long> {
    Optional<Especialidad> findByNombre(String nombre);
}
