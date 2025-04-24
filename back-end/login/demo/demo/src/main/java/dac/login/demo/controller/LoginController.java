package dac.login.demo.controller;

import dac.login.demo.model.Login;
import dac.login.demo.service.LoginService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final RabbitTemplate rabbitTemplate;
    private final LoginServiceservice loginService; 


    public pedidoController(RabbitTemplate rabbitTemplate , LoginService loginService) {
        this.rabbitTemplate = rabbitTemplate;
        this.loginService = loginService;
    }
    
    @Value("${broker.queueue.name}")
    private String routingKey


    @PostMapping
    public String createLogin(@RequestBody Login login) {
        
        Login loginCriado = createdLogin = loginService.createLogin(login);

        rabbitTemplate.convertAndSend("",routingKey ,loginCriado.getId());
        return "Login created with ID: " + createdLogin.getId();
    }

    @GetMapping
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

}
