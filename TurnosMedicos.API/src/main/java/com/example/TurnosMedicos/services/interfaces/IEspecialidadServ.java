package com.example.TurnosMedicos.services.interfaces;

import com.example.TurnosMedicos.DTO.Especialidad.EspecialidadDTO;
import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.EspecialidadQuery;
import com.example.TurnosMedicos.model.EspecialistaQuery;

import java.util.List;

public interface IEspecialidadServ {
    List<EspecialidadDTO> listarEspecialidades();
    EspecialidadDTO agregarEspecialidad(EspecialidadQuery especialidad) throws ElementAlreadyExistsException;
}
