package com.example.TurnosMedicos.model;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.HashSet;
import java.util.Set;
import static org.junit.Assert.*;

@SpringBootTest
public class OdontologoTest {

    private Odontologo odontologo;

    @Before
    public void setUp() {
        odontologo = new Odontologo("Apellido", "Nombre", "12345");
    }

    @Test
    public void testGetApellido() {
        assertEquals("Apellido", odontologo.getApellido());
    }

    @Test
    public void testSetApellido() {
        odontologo.setApellido("NuevoApellido");
        assertEquals("NuevoApellido", odontologo.getApellido());
    }

    @Test
    public void testGetNombre() {
        assertEquals("Nombre", odontologo.getNombre());
    }

    @Test
    public void testSetNombre() {
        odontologo.setNombre("NuevoNombre");
        assertEquals("NuevoNombre", odontologo.getNombre());
    }

    @Test
    public void testGetMatricula() {
        assertEquals("12345", odontologo.getMatricula());
    }

    @Test
    public void testSetMatricula() {
        odontologo.setMatricula("54321");
        assertEquals("54321", odontologo.getMatricula());
    }

    @Test
    public void testGetTurnos() {
        Set<Turno> turnos = odontologo.getTurnos();
        assertNotNull(turnos);
        assertFalse(turnos.isEmpty());
    }

    @Test
    public void testSetTurnos() {
        Set<Turno> turnos = new HashSet<>();
        turnos.add(new Turno(Date.from(LocalDateTime.now().toInstant(ZoneOffset.UTC)), null));
        odontologo.setTurnos(turnos);
        assertEquals(turnos, odontologo.getTurnos());
    }

    @Test
    public void testGetId() {
        assertNull(odontologo.getId());
    }
}
