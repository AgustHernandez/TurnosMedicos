package com.example.TurnosMedicos.DTO.Turno;

import com.example.TurnosMedicos.DTO.User.UserDTO;
import com.example.TurnosMedicos.model.AppUser;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TurnoDTO {
    private Date fecha;


    public TurnoDTO(Date fecha) {
        this.fecha = fecha;
    }

    public TurnoDTO() {
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

}