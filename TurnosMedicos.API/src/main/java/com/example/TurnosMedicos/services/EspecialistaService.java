package com.example.TurnosMedicos.services;

import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.DTO.Turno.TurnoDTO;
import com.example.TurnosMedicos.datos.EspecialistaDAO;
import com.example.TurnosMedicos.datos.interfaces.IDao;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.model.EspecialistaQuery;
import com.example.TurnosMedicos.model.Turno;
import com.example.TurnosMedicos.services.interfaces.IEspecialistaServ;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

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
        var result = mapper.convertValue(listaEspecialistas, new TypeReference<List<EspecialistaDTO>>() {});
        return result;
    }

    @Override
    public EspecialistaDTO agregarEspecialista(EspecialistaQuery especialista) throws ElementAlreadyExistsException {
        logger.info("Inserción de especialista solicitada");
        Especialista _especialista = EspecialistaDao.agregar(mapper.convertValue(especialista, Especialista.class));
        return mapper.convertValue(_especialista, EspecialistaDTO.class);
    }

    @Override
    public List<TurnoDTO> obtenerTurnosPorMatriculaYFecha(String matricula, LocalDate fecha) {
        Optional<Especialista> especialistaEncontrado = EspecialistaDao.listar().stream()
                .filter(especialista -> matricula.equals(especialista.getLegajo()))
                .findFirst();
        if (especialistaEncontrado.isPresent()) {
            Especialista especialista = especialistaEncontrado.get();
            List<Turno> turnosEncontrados = especialista.getTurnos().stream()
                    .filter(turno -> {
                        LocalDate turnoFecha = turno.getFecha().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                        return turnoFecha.equals(fecha);
                    })
                    .collect(Collectors.toList());

            if (!turnosEncontrados.isEmpty()) {
                turnosEncontrados.sort(Comparator.comparing(Turno::getFecha));
                List<TurnoDTO> turnosEncontradosDTO = new ArrayList<>();
                for (int i = 0; i < turnosEncontrados.size(); i++) {
                    Turno turno = turnosEncontrados.get(i);
                    turnosEncontradosDTO.add(new TurnoDTO(String.valueOf(i + 1), turno.getFecha().toInstant().atZone(ZoneId.systemDefault()).toLocalTime(), turno.getId().toString()));
                }

                return turnosEncontradosDTO;
            }
        }
        return Collections.emptyList();
    }


}
