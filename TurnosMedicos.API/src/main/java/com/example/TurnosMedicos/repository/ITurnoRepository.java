package com.example.TurnosMedicos.repository;

import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.model.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITurnoRepository  extends JpaRepository<Turno, Long> {
}