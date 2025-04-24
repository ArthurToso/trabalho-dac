package dac.login.demo.service;
package dac.login.demo.repository.LoginRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import dac.login.demo.model.Login;

@Service

public class loginService {

    private final LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
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
