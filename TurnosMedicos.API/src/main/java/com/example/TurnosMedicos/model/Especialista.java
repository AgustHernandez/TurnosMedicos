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
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="especialidadId", referencedColumnName = "Id")
    private Especialidad especialidad;
    public Especialista() {
    }

    public Especialista(String legajo, String apellido, String nombre, Especialidad especialidad) {
        this.legajo = legajo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.especialidad = especialidad;
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

    public Especialidad getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(Especialidad especialidad) {
        this.especialidad = especialidad;
    }
}
