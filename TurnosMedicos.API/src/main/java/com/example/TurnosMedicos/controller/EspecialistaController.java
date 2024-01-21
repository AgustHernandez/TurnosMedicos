package com.example.TurnosMedicos.controller;

import com.example.TurnosMedicos.DTO.Especialista.EspecialistaDTO;
import com.example.TurnosMedicos.services.interfaces.IEspecialistaServ;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EspecialistaController {
    private static final Logger logger = Logger.getLogger(EspecialistaController.class);
    private final IEspecialistaServ EspecialistaService;

    @Autowired
    public EspecialistaController(IEspecialistaServ especialistaService) {
        this.EspecialistaService = especialistaService;
    }

    @GetMapping("/especialistas")
    public ResponseEntity<List<EspecialistaDTO>> listarOdontologos() {
        logger.info("GET /especialistas");
        List<EspecialistaDTO> result = EspecialistaService.listarEspecialistas();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}