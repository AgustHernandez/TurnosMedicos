package com.example.TurnosMedicos.datos;

import com.example.TurnosMedicos.datos.interfaces.IDao;
import com.example.TurnosMedicos.exceptions.DuplicatedElementException;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.exceptions.ResourceNotFoundException;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.repository.IEspecialistaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspecialistaDAO implements IDao<Especialista> {

    private static final Logger logger = Logger.getLogger(EspecialistaDAO.class);
    private IEspecialistaRepository EspecialistaRepository;

    @Autowired
    public EspecialistaDAO(IEspecialistaRepository especialistaRepository){
        EspecialistaRepository = especialistaRepository;
    }
    @Override
    public List<Especialista> listar() {
        return EspecialistaRepository.findAll();
    }

    @Override
    public Especialista agregar(Especialista elemento) throws ElementAlreadyExistsException {
        logger.debug("Agregar especialista");
        if(!EspecialistaRepository.findByLegajo(elemento.getLegajo()).isEmpty())
        {
            ElementAlreadyExistsException ex = new ElementAlreadyExistsException("El especialista a agregar ya existe en la base de datos.");
            logger.error(ex.getMessage(),ex);
            throw ex;
        }
        logger.debug("El especialista no existe en la base de datos. Se procede con la inserción");
        return EspecialistaRepository.save(elemento);
    }

    @Override
    public Especialista modificar(Especialista elemento, Boolean saltearValidacionDuplicado) throws ResourceNotFoundException, DuplicatedElementException {
        return null;
    }

    @Override
    public Boolean eliminar(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public Especialista buscar(Long id) throws ResourceNotFoundException {
        return null;
    }
}
