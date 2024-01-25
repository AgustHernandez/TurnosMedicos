package com.example.TurnosMedicos.DTO.Turno;

import com.example.TurnosMedicos.DTO.User.UserDTO;
import com.example.TurnosMedicos.model.AppUser;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalTime;
import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TurnoDTO {
    private String key;
    private String horario;
    private String codigoTurno;

    public TurnoDTO() {
    }

    public TurnoDTO(String key, String horario, String codigoTurno) {
        this.key = key;
        this.horario = horario;
        this.codigoTurno = codigoTurno;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getCodigoTurno() {
        return codigoTurno;
    }

    public void setCodigoTurno(String codigoTurno) {
        this.codigoTurno = codigoTurno;
    }
}