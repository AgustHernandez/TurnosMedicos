package com.example.TurnosMedicos.datos;

import com.example.TurnosMedicos.datos.interfaces.IDao;
import com.example.TurnosMedicos.exceptions.DuplicatedElementException;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.exceptions.ResourceNotFoundException;
import com.example.TurnosMedicos.model.Especialidad;
import com.example.TurnosMedicos.model.Turno;
import com.example.TurnosMedicos.repository.ITurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TurnoDAO implements IDao<Turno> {
    private ITurnoRepository TurnoRepository;

    @Autowired
    public TurnoDAO(ITurnoRepository turnoRepository)
    {
        TurnoRepository = turnoRepository;
    }

    @Override
    public List<Turno> listar() {
        return TurnoRepository.findAll();
    }

    @Override
    public Turno agregar(Turno elemento) throws ElementAlreadyExistsException {
        return null;
    }

    @Override
    public Turno modificar(Turno elemento, Boolean saltearValidacionDuplicado) throws ResourceNotFoundException, DuplicatedElementException {
        return TurnoRepository.save(elemento);
    }

    @Override
    public Boolean eliminar(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public Turno buscar(Long id) throws ResourceNotFoundException {
        return TurnoRepository.findById(id).stream().findFirst().get();
    }
}
