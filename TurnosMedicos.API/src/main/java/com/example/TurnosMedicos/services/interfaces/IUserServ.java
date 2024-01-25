package com.example.TurnosMedicos.services.interfaces;

import com.example.TurnosMedicos.model.AppUser;
import com.example.TurnosMedicos.model.AppUserQuery;

public interface IUserServ {
    AppUser createUser(AppUserQuery appUserQuery);
}
