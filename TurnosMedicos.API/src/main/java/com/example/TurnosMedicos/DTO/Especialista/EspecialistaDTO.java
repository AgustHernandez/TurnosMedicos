package com.example.TurnosMedicos.DTO.Especialista;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;

public class EspecialistaDTO {
    public void setId(Long id) {
        Id = id;
    }

    public EspecialistaDTO(){}
    public EspecialistaDTO(Long id, String apellido, String nombre) {
        Id = id;
        this.apellido = apellido;
        this.nombre = nombre;
    }

    private Long Id;
    private String apellido;

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

    private String nombre;
}
