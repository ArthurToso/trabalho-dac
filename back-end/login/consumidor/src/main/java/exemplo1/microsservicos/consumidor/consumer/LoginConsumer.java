package exemplo1.microsservicos.consumidor.consumer;

import com.fasterxml.jackson.databind.ObjectMapper;
import exemplo1.microsservicos.consumidor.dto.UsuarioDTO;
import exemplo1.microsservicos.consumidor.repository.LoginRepository;
import dac.login.demo.model.Login;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class LoginConsumer {

    private final ObjectMapper objectMapper;
    private final LoginRepository loginRepository;

    public LoginConsumer(ObjectMapper objectMapper, LoginRepository loginRepository) {
        this.objectMapper = objectMapper;
        this.loginRepository = loginRepository;
    }

    @RabbitListener(queues = "${broker.queue.name}")
    public void consumeMessage(@Payload String message) {
        try {
            UsuarioDTO usuarioDTO = objectMapper.readValue(message, UsuarioDTO.class);

            Login login = new Login(
                null,
                usuarioDTO.getNome(),
                "defaultPassword", // ou gere uma senha
                usuarioDTO.getEmail()
            );

            loginRepository.save(login);
            System.out.println("Login salvo: " + login.getUsername());

        } catch (Exception e) {
            System.err.println("Erro ao processar mensagem: " + e.getMessage());
        }
    }
}