package com.example.TurnosMedicos.model;


import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table
public class Especialidad implements Comparable<Especialidad> {
    @javax.persistence.Id
    @SequenceGenerator(name="especialidad_sequence", sequenceName = "especialidad_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "especialidad_sequence")
    private Long Id;
    private String nombre;

    public Especialidad() {
    }

    public Especialidad(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public int compareTo(Especialidad o) {
        if(this.nombre.equals(o.nombre)){
            return 0;
        }
        return 1;
    }

}
