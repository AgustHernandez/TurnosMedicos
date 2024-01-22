package com.example.TurnosMedicos.controller;

import com.example.TurnosMedicos.DTO.Especialidad.EspecialidadDTO;
import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.EspecialidadQuery;
import com.example.TurnosMedicos.model.EspecialistaQuery;
import com.example.TurnosMedicos.services.interfaces.IEspecialidadServ;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EspecialidadController {
    private static final Logger logger = Logger.getLogger(EspecialidadController.class);
    private final IEspecialidadServ EspecialidadService;

    @Autowired
    public EspecialidadController(IEspecialidadServ especialidadServ){
        this.EspecialidadService = especialidadServ;
    }

    @CrossOrigin
    @Operation(summary = "Obtiener especialidades", description = "Retorna una lista con todas las especialidades cargadas en la BD")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Consulta exitosa"),
            @ApiResponse(responseCode = "404", description = "No se encontraron especialidades")
    })
    @GetMapping("/especialidades")
    public ResponseEntity<List<EspecialidadDTO>> listarEspecialidades() {
        logger.info("GET /especialidades");
        List<EspecialidadDTO> result = EspecialidadService.listarEspecialidades();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @CrossOrigin
    @Operation(summary = "Agregar especialidad", description = "Agrega una nueva especialidad en la BD")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Consulta exitosa"),
            @ApiResponse(responseCode = "404", description = "No se encontraron especialidades")
    })
    @PostMapping("/especialidades")
    public ResponseEntity<EspecialidadDTO> agregarEspecialidad(@RequestBody EspecialidadQuery especialidad) throws ElementAlreadyExistsException {
        logger.info("POST /especialidades");
        EspecialidadDTO result = EspecialidadService.agregarEspecialidad(especialidad);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
