package com.example.TurnosMedicos.model;

import javax.persistence.*;

@Entity
@Table
public class Especialista {

    @javax.persistence.Id
    @SequenceGenerator(name="especialista_sequence", sequenceName = "especialista_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "especialista_sequence")
    private Long Id;
    private String legajo;
    private String apellido;
    private String nombre;
    public Especialista() {
    }

    public void setId(Long id) {
        Id = id;
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
