package com.example.TurnosMedicos.services;

import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.datos.interfaces.IDao;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.model.EspecialistaQuery;
import com.example.TurnosMedicos.services.interfaces.IEspecialistaServ;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspecialistaService implements IEspecialistaServ {

    private ObjectMapper mapper;
    private static final org.apache.log4j.Logger logger = Logger.getLogger(EspecialistaService.class);

    IDao<Especialista> EspecialistaDao;

    @Autowired
    public EspecialistaService(IDao<Especialista> especialistaDao)
    {
        EspecialistaDao = especialistaDao;
        this.mapper = new ObjectMapper();
    }

    @Override
    public List<EspecialistaDTO> listarEspecialistas() {
        logger.info("Listado de especialistas solicitado");
        List<Especialista> listaEspecialistas = EspecialistaDao.listar();
        return mapper.convertValue(listaEspecialistas, new TypeReference<List<EspecialistaDTO>>() {});
    }

    @Override
    public EspecialistaDTO agregarEspecialista(EspecialistaQuery especialista) throws ElementAlreadyExistsException {
        logger.info("Inserción de especialista solicitada");
        Especialista _especialista = EspecialistaDao.agregar(mapper.convertValue(especialista, Especialista.class));
        return mapper.convertValue(_especialista, EspecialistaDTO.class);
    }
}
