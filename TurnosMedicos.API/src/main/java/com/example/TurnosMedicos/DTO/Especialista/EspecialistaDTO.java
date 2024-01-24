package com.example.TurnosMedicos.DTO.Especialista;

import com.example.TurnosMedicos.DTO.Especialidad.EspecialidadDTO;
import com.example.TurnosMedicos.DTO.Turno.TurnoDTO;
import com.example.TurnosMedicos.model.Turno;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.*;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EspecialistaDTO {
    private Long Id;
    private String legajo;
    private String apellido;
    private String nombre;
    private EspecialidadDTO especialidad;
    public void setId(Long id) {
        Id = id;
    }

    public EspecialistaDTO(){}
    public EspecialistaDTO(Long id, String apellido, String nombre, String legajo, EspecialidadDTO especialidadDTO) {
        Id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
        this.especialidad = especialidadDTO;
    }

    public String getLegajo() {
        return legajo;
    }

    public void setLegajo(String legajo) {
        this.legajo = legajo;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public EspecialidadDTO getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(EspecialidadDTO especialidad) {
        this.especialidad = especialidad;
    }
}
