package com.example.TurnosMedicos.model;

import javax.persistence.*;

@Entity
@Table
public class Especialista {
    public Especialista() {
    }

    public Especialista(String apellido, String nombre, String legajo) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Especialista(Long id, String apellido, String nombre, String legajo) {
        Id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
    }

    @javax.persistence.Id
    @SequenceGenerator(name="especialista_sequence", sequenceName = "especialista_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "especialista_sequence")
    private Long Id;

    public String getLegajo() {
        return legajo;
    }

    public void setLegajo(String legajo) {
        legajo = legajo;
    }

    private String legajo;
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
