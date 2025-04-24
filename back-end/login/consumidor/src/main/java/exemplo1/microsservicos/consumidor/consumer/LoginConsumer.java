package exemplo1.microsservicos.consumidor.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class LoginConsumer{

    @RabbitListener(queues = "${broker.queue.name}")
    public void consumeMessage(@Payload String message) {
        System.out.println("Mensagem recebida: " + message);
    }


}