package exemplo1.microsservicos.consumidor.saga;

import com.fasterxml.jackson.databind.ObjectMapper;
import exemplo1.microsservicos.consumidor.model.Voo;
import exemplo1.microsservicos.consumidor.repository.VooRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class VooSagaListener {

    private final VooRepository vooRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public VooSagaListener(VooRepository vooRepository) {
        this.vooRepository = vooRepository;
    }

    @RabbitListener(queues = "${broker.queue.name}")
    public void receberMensagem(String mensagem) {
        try {
            Voo voo = objectMapper.readValue(mensagem, Voo.class);
            vooRepository.salvar(voo);
            System.out.println("Voo salvo/atualizado: " + voo.getCodigo_voo());
        } catch (Exception e) {
            System.out.println("Erro ao processar mensagem: " + e.getMessage());
        }
    }
}