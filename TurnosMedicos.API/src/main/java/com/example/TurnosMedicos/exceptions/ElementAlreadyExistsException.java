package com.example.TurnosMedicos.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class ElementAlreadyExistsException extends Exception{
    public ElementAlreadyExistsException(String message) {
        super(message);
    }
}
