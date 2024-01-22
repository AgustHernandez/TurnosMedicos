package com.example.TurnosMedicos.repository;

import com.example.TurnosMedicos.model.Especialista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface IEspecialistaRepository extends JpaRepository<Especialista, Long> {
    Optional<Especialista> findByApellido(String apellido);
    Optional<Especialista> findByLegajo(String findByLegajo);
}
