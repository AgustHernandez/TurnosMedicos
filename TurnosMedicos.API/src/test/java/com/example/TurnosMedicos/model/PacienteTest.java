package com.example.TurnosMedicos.model;

import org.junit.Before;
import org.junit.Test;
import java.util.Date;
import static org.junit.Assert.*;

public class PacienteTest {

    private Paciente paciente;

    @Before
    public void setUp() {
        paciente = new Paciente("Apellido", "Nombre", new Direccion(), "123456789");
    }

    @Test
    public void testGetId() {
        assertNull(paciente.getId());
    }

    @Test
    public void testGetApellido() {
        assertEquals("Apellido", paciente.getApellido());
    }

    @Test
    public void testSetApellido() {
        paciente.setApellido("NuevoApellido");
        assertEquals("NuevoApellido", paciente.getApellido());
    }

    @Test
    public void testGetNombre() {
        assertEquals("Nombre", paciente.getNombre());
    }

    @Test
    public void testSetNombre() {
        paciente.setNombre("NuevoNombre");
        assertEquals("NuevoNombre", paciente.getNombre());
    }

    @Test
    public void testGetDireccion() {
        assertNotNull(paciente.getDireccion());
    }

    @Test
    public void testSetDireccion() {
        Direccion nuevaDireccion = new Direccion();
        paciente.setDireccion(nuevaDireccion);
        assertEquals(nuevaDireccion, paciente.getDireccion());
    }

    @Test
    public void testGetDNI() {
        assertEquals("123456789", paciente.getDNI());
    }

    @Test
    public void testSetDNI() {
        paciente.setDNI("987654321");
        assertEquals("987654321", paciente.getDNI());
    }
}
