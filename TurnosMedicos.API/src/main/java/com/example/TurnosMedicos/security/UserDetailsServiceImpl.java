package com.example.TurnosMedicos.security;

import com.example.TurnosMedicos.model.AppUser;
import com.example.TurnosMedicos.repository.IUserRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private IUserRepository UserRepository;
    private static final Logger logger = Logger.getLogger(UserDetailsServiceImpl.class);

    @Autowired
    public UserDetailsServiceImpl(IUserRepository userRepository)
    {
        this.UserRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        logger.debug("Cargando detalles del usuario");
        AppUser appUser = UserRepository.findByEmail(email).get();
        Set<GrantedAuthority> grantList = new HashSet<GrantedAuthority>();
        UserDetails user = (UserDetails) new User(email, appUser.getPassword(),grantList);

        return user;
    }
}
