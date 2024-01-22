package com.example.TurnosMedicos.DTO.Especialista;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;

public class EspecialistaDTO {
    private Long Id;
    private String legajo;
    private String apellido;
    private String nombre;
    public void setId(Long id) {
        Id = id;
    }

    public EspecialistaDTO(){}
    public EspecialistaDTO(Long id, String apellido, String nombre, String legajo) {
        Id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
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


}
