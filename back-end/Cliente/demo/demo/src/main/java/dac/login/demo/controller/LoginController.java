package dac.login.demo.controller;
import java.util.List;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;

import dac.login.demo.model.Login;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final RabbitTemplate rabbitTemplate;
    private final LoginService loginService; 


    public LoginController(RabbitTemplate rabbitTemplate, LoginService loginService) {
        this.rabbitTemplate = rabbitTemplate;
        this.loginService = loginService;
    }
    
    @Value("${broker.queueue.name}")
    private String routingKey;


    @PostMapping
    public String createLogin(@RequestBody Login login) {
        
        Login createdLogin = (Login) loginService.createLogin(login);

        rabbitTemplate.convertAndSend("",routingKey ,createdLogin.getId());
        return "Login created with ID: " + createdLogin.getId();
    }

    @GetMapping
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

}
