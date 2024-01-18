package com.example.TurnosMedicos.model;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class DireccionTest {

    private Direccion direccion;

    @Before
    public void setUp() {
        direccion = new Direccion("Calle Principal", "123", "Ciudad", "Provincia");
    }

    @Test
    public void testGetId() {
        assertNull(direccion.getId());
    }

    @Test
    public void testGetCalle() {
        assertEquals("Calle Principal", direccion.getCalle());
    }

    @Test
    public void testSetCalle() {
        direccion.setCalle("Calle Secundaria");
        assertEquals("Calle Secundaria", direccion.getCalle());
    }

    @Test
    public void testGetAltura() {
        assertEquals("123", direccion.getAltura());
    }

    @Test
    public void testSetAltura() {
        direccion.setAltura("456");
        assertEquals("456", direccion.getAltura());
    }

    @Test
    public void testGetLocalidad() {
        assertEquals("Ciudad", direccion.getLocalidad());
    }

    @Test
    public void testSetLocalidad() {
        direccion.setLocalidad("Otra Ciudad");
        assertEquals("Otra Ciudad", direccion.getLocalidad());
    }

    @Test
    public void testGetProvincia() {
        assertEquals("Provincia", direccion.getProvincia());
    }

    @Test
    public void testSetProvincia() {
        direccion.setProvincia("Otra Provincia");
        assertEquals("Otra Provincia", direccion.getProvincia());
    }

    @Test
    public void testCompareTo_SameDireccion() {
        Direccion mismaDireccion = new Direccion("Calle Principal", "123", "Ciudad", "Provincia");
        assertEquals(0, direccion.compareTo(mismaDireccion));
    }

    @Test
    public void testCompareTo_DifferentDireccion() {
        Direccion otraDireccion = new Direccion("Otra Calle", "456", "Otra Ciudad", "Otra Provincia");
        assertNotEquals(0, direccion.compareTo(otraDireccion));
    }
}
