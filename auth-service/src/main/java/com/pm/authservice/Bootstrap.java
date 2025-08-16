package com.pm.authservice;

import com.pm.authservice.model.User;
import com.pm.authservice.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class Bootstrap {

    @Bean
    CommandLineRunner init(UserRepository repo, PasswordEncoder encoder) {
        return args -> {
            if (repo.findByUsername("admin").isEmpty()) {
                repo.save(User.builder().username("admin").password(encoder.encode("adminpass")).role("ADMIN").build());
            }
            if (repo.findByUsername("doctor").isEmpty()) {
                repo.save(User.builder().username("doctor").password(encoder.encode("doctorpass")).role("DOCTOR").build());
            }
            if (repo.findByUsername("reception").isEmpty()) {
                repo.save(User.builder().username("reception").password(encoder.encode("receppass")).role("RECEPTIONIST").build());
            }
        };
    }
}
