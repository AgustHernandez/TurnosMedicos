package com.example.TurnosMedicos.model;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import static org.junit.Assert.*;
@SpringBootTest
public class TurnoTest {

    private Turno turno;

    @Before
    public void setUp() {
        turno = new Turno(new Date(), new Paciente());
    }

    @Test
    public void testGetId() {
        assertNull(turno.getId());
    }

    @Test
    public void testGetFecha() {
        assertNotNull(turno.getFecha());
    }

    @Test
    public void testSetFecha() {
        Date nuevaFecha = new Date();
        turno.setFecha(nuevaFecha);
        assertEquals(nuevaFecha, turno.getFecha());
    }

    @Test
    public void testGetPaciente() {
        assertNotNull(turno.getPaciente());
    }

    @Test
    public void testSetPaciente() {
        Paciente nuevoPaciente = new Paciente();
        turno.setPaciente(nuevoPaciente);
        assertEquals(nuevoPaciente, turno.getPaciente());
    }
}
