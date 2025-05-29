package dac.login.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import dac.login.demo.model.Login;

@Service
public class loginService {

    private final LoginRepository loginRepository;

    public loginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Login createLogin(Login login) {
        return loginRepository.save(login);
    }

    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    public interface LoginRepository extends JpaRepository<Login, Long> {
        Optional<Login> findByEmailAndPassword(String email, String password);
    }
}


