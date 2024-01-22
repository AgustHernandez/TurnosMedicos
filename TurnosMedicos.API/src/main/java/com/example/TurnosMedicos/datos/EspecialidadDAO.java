package com.example.TurnosMedicos.datos;

import com.example.TurnosMedicos.datos.interfaces.IDao;
import com.example.TurnosMedicos.exceptions.DuplicatedElementException;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.exceptions.ResourceNotFoundException;
import com.example.TurnosMedicos.model.Especialidad;
import com.example.TurnosMedicos.repository.IEspecialidadRepository;
import com.example.TurnosMedicos.repository.IEspecialistaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspecialidadDAO implements IDao<Especialidad> {
    private static final Logger logger = Logger.getLogger(EspecialidadDAO.class);
    private IEspecialidadRepository especialidadRepository;

    @Autowired
    public EspecialidadDAO(IEspecialidadRepository especialidadRepository)
    {
        this.especialidadRepository = especialidadRepository;
    }
    @Override
    public List<Especialidad> listar() {
        return especialidadRepository.findAll();
    }

    @Override
    public Especialidad agregar(Especialidad elemento) throws ElementAlreadyExistsException {
        logger.debug("Agregar especialidad");
//        if(!especialidadRepository.findOne(e => elemento.getNombre() == e))
//        {
//            ElementAlreadyExistsException ex = new ElementAlreadyExistsException("La especialidad a agregar ya existe en la base de datos.");
//            logger.error(ex.getMessage(),ex);
//            throw ex;
//        }
        logger.debug("La especialidad no existe en la base de datos. Se procede con la inserción");
        return especialidadRepository.save(elemento);
    }

    @Override
    public Especialidad modificar(Especialidad elemento, Boolean saltearValidacionDuplicado) throws ResourceNotFoundException, DuplicatedElementException {
        return null;
    }

    @Override
    public Boolean eliminar(Long id) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public Especialidad buscar(Long id) throws ResourceNotFoundException {
        return null;
    }
}
