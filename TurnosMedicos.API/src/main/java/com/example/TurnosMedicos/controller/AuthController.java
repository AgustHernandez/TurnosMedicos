package com.example.TurnosMedicos.controller;

import com.example.TurnosMedicos.model.JwtResponse;
import com.example.TurnosMedicos.model.LoginRequest;
import com.example.TurnosMedicos.security.UserDetailsServiceImpl;
import com.example.TurnosMedicos.services.JwtTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;
    private final JwtTokenService jwtTokenService;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager,
                          UserDetailsServiceImpl userDetailsService,
                          JwtTokenService jwtTokenService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtTokenService = jwtTokenService;
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // Autenticar al usuario
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        // Generar token JWT
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token = jwtTokenService.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }
}
