package com.example.TurnosMedicos.services.interfaces;

import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.model.EspecialistaQuery;

import java.util.List;

public interface IEspecialistaServ {
    List<EspecialistaDTO> listarEspecialistas();
    EspecialistaDTO agregarEspecialista(EspecialistaQuery especialista) throws ElementAlreadyExistsException;
}
