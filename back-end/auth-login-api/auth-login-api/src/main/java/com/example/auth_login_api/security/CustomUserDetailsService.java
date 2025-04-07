package com.example.auth_login_api.security;

import com.example.auth_login_api.repositories.UserRepository;
import com.example.auth_login_api.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.repository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("UserNotFound"));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getSenha(), new )
    }
}
