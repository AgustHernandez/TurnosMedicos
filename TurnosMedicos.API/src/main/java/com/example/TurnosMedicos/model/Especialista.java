package com.example.TurnosMedicos.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;

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
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "especialista_id")
    private Set<Turno> turnos;

    public Especialista() {
        crearAgenda(LocalDateTime.now(), LocalDateTime.now().plusDays(90), 9 , 12);
    }

    public Especialista(String legajo, String apellido, String nombre, Especialidad especialidad) {
        this.legajo = legajo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.especialidad = especialidad;
        crearAgenda(LocalDateTime.now(), LocalDateTime.now().plusDays(90), 9, 12);
    }

    private void crearAgenda(LocalDateTime fechaDesde, LocalDateTime fechaHasta, int horaInicio, int horaFin) {
        this.turnos = new HashSet<Turno>();
        ZoneId zoneId = ZoneId.systemDefault();

        ZonedDateTime dateTimeDesde = fechaDesde.atZone(zoneId);
        ZonedDateTime dateTimeHasta = fechaHasta.atZone(zoneId);

        List<Date> fechas = new ArrayList<>();
        ZonedDateTime dateTimeActual = dateTimeDesde.with(LocalTime.of(0, 0, 0));

        while (!dateTimeActual.isAfter(dateTimeHasta)) {
            int currentHour = dateTimeActual.getHour();

            // Verifica si la hora actual está dentro del rango configurado
            if (currentHour >= horaInicio && currentHour < horaFin) {
                ZonedDateTime roundedDateTime = dateTimeActual.withSecond(0).withNano(0);
                Date date = Date.from(roundedDateTime.toInstant());
                fechas.add(date);
            }

            dateTimeActual = dateTimeActual.plusMinutes(30);
        }

        for (Date fecha : fechas) {
            Turno turno = new Turno(fecha, null);
            turnos.add(turno);
        }
    }


    public Set<Turno> getTurnos() {
        return turnos;
    }

    public void setTurnos(Set<Turno> turnos) {
        this.turnos = turnos;
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
