package dac.login.demo.repository;

import dac.login.demo.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepositoryClass  extends JpaRepository<Login, Long> {
    // Custom query methods can be defined here if needed
    // For example, to find a user by username:
    // Optional<Login> findByUsername(String username);

    
}
