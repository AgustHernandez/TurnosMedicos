package com.example.TurnosMedicos.services;

import com.example.TurnosMedicos.DTO.Especialidad.EspecialidadDTO;
import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.datos.EspecialidadDAO;
import com.example.TurnosMedicos.datos.interfaces.IDao;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.Especialidad;
import com.example.TurnosMedicos.model.EspecialidadQuery;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.services.interfaces.IEspecialidadServ;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspecialidadService  implements IEspecialidadServ {

    private ObjectMapper mapper;
    private static final org.apache.log4j.Logger logger = Logger.getLogger(EspecialidadService.class);

    IDao<Especialidad> EspecialidadDao;

    @Autowired
    public EspecialidadService(IDao<Especialidad> especialistaDao)
    {
        EspecialidadDao = especialistaDao;
        this.mapper = new ObjectMapper();
    }
    @Override
    public List<EspecialidadDTO> listarEspecialidades() {
        logger.info("Listado de especialidades solicitado");
        List<Especialidad> listEspecialidades = EspecialidadDao.listar();
        return mapper.convertValue(listEspecialidades, new TypeReference<List<EspecialidadDTO>>() {});
    }

    @Override
    public EspecialidadDTO agregarEspecialidad(EspecialidadQuery especialidad) throws ElementAlreadyExistsException {
        logger.info("Inserción de especialidad solicitada");
        Especialidad _especialidad = EspecialidadDao.agregar(mapper.convertValue(especialidad, Especialidad.class));
        return mapper.convertValue(_especialidad, EspecialidadDTO.class);
    }
}
