package com.example.TurnosMedicos.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table
@JsonIgnoreProperties(ignoreUnknown = true)
public class Turno {

    @Id
    @SequenceGenerator(name="turno_sequence", sequenceName = "turno_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "turno_sequence")
    private Long Id;

    private Date fecha;
    @ManyToOne
    @JoinColumn(name="appUserId")
    private AppUser appUser;

    public Turno(Date fecha, AppUser appUser) {
        this.fecha = fecha;
        this.appUser = appUser;
    }

    public Turno() {
    }

    public Long getId() {
        return Id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}