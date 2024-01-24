package com.example.TurnosMedicos.controller;

import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.DTO.Turno.TurnoDTO;
import com.example.TurnosMedicos.exceptions.ElementAlreadyExistsException;
import com.example.TurnosMedicos.model.Especialista;
import com.example.TurnosMedicos.model.EspecialistaQuery;
import com.example.TurnosMedicos.services.interfaces.IEspecialistaServ;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/especialistas")
public class EspecialistaController {
    private static final Logger logger = Logger.getLogger(EspecialistaController.class);
    private final IEspecialistaServ EspecialistaService;

    @Autowired
    public EspecialistaController(IEspecialistaServ especialistaService) {
        this.EspecialistaService = especialistaService;
    }

    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<List<EspecialistaDTO>> listarEspecialistas() {
        logger.info("GET /especialistas");
        List<EspecialistaDTO> result = EspecialistaService.listarEspecialistas();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<EspecialistaDTO> agregarEspecialista(@RequestBody EspecialistaQuery especialista) throws ElementAlreadyExistsException {
        logger.info("POST /especialistas");
        EspecialistaDTO result = EspecialistaService.agregarEspecialista(especialista);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{matricula}/turnos")
    public ResponseEntity<List<TurnoDTO>> obtenerTurnosPorMatriculaYFecha(
            @PathVariable String matricula,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fecha) {
        logger.info("GET /especialistas/{}/turnos?fecha={}");
        List<TurnoDTO> result = EspecialistaService.obtenerTurnosPorMatriculaYFecha(matricula, fecha);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
