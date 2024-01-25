package com.example.TurnosMedicos.services;

import com.example.TurnosMedicos.model.AppUser;
import com.example.TurnosMedicos.model.AppUserQuery;
import com.example.TurnosMedicos.model.AppUserRole;
import com.example.TurnosMedicos.repository.IUserRepository;
import com.example.TurnosMedicos.security.PasswordEncoder;
import com.example.TurnosMedicos.services.interfaces.IUserServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserServ {
    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(IUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AppUser createUser(AppUserQuery userRequest) {
        if (userRepository.existsByUsername(userRequest.getUsername()) ||
                userRepository.existsByEmail(userRequest.getEmail())) {
            throw new RuntimeException("El nombre de usuario o correo electrónico ya está en uso.");
        }

        AppUser newUser = new AppUser(
                userRequest.getUsername(),
                userRequest.getUsername(),
                userRequest.getEmail(),
                passwordEncoder.bCryptPasswordEncoder().encode(userRequest.getPassword()),
                AppUserRole.ROLE_USER
        );

        // Guarda el usuario en la base de datos
        return userRepository.save(newUser);
    }
}
