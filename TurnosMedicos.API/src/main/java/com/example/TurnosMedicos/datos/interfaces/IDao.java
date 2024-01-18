package com.example.TurnosMedicos.datos.interfaces;

import com.example.TurnosMedicos.exceptions.DuplicatedElementException;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.exceptions.ResourceNotFoundException;

import java.util.List;

public interface IDao <T> {
    List<T> listar();
    T agregar(T elemento) throws ElementAlreadyExistsException;
    T modificar(T elemento, Boolean saltearValidacionDuplicado) throws ResourceNotFoundException, DuplicatedElementException;
    Boolean eliminar(Long id) throws ResourceNotFoundException;
    T buscar(Long id) throws ResourceNotFoundException;
}
