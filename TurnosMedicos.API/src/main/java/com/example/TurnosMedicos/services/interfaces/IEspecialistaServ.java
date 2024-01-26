package com.example.TurnosMedicos.services.interfaces;

import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.DTO.Turno.InfoTurnoDTO;
import com.example.TurnosMedicos.DTO.Turno.TurnoDTO;
import com.example.TurnosMedicos.exceptions.DuplicatedElementException;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.exceptions.ResourceNotFoundException;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.model.EspecialistaQuery;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface IEspecialistaServ {
    List<EspecialistaDTO> listarEspecialistas();
    EspecialistaDTO agregarEspecialista(EspecialistaQuery especialista) throws ElementAlreadyExistsException;
    List<TurnoDTO> obtenerTurnosPorMatriculaYFecha(String matricula, LocalDate fecha);

    InfoTurnoDTO guardarTurnoPorCodigo(String CodigoTurno,String matricula, String username) throws ResourceNotFoundException, DuplicatedElementException;
    InfoTurnoDTO obtenerTurnoPorCodigo(String matricula,String CodigoTurno) throws ResourceNotFoundException, DuplicatedElementException;
}
