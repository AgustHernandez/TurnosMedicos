package com.example.TurnosMedicos.repository;

import com.example.TurnosMedicos.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<AppUser, Long> {
}
