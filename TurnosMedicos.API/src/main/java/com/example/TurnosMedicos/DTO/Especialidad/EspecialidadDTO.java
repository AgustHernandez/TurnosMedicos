package com.example.TurnosMedicos.DTO.Especialidad;

import java.util.UUID;

public class EspecialidadDTO {
    private Long Id;
    private String nombre;

    public EspecialidadDTO() {
    }


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
