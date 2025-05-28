package exemplo1.microsservicos.consumidor.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ReservaProducer {

    private final RabbitTemplate rabbitTemplate;

    @Value("${broker.queue.saga}")
    private String sagaQueue;

    public ReservaProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendEvent(Object event) {
        rabbitTemplate.convertAndSend(sagaQueue, event);
    }
}