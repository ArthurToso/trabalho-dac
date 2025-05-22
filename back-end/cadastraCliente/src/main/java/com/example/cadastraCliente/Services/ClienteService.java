package com.example.cadastraCliente.Services;

import com.example.cadastraCliente.Cliente.Cliente;
import com.example.cadastraCliente.Repository.ClienteRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Value("${rabbitmq.exchange}")
    private String exchange;

    @Value("${rabbitmq.routingKey}")
    private String routingKey;

    public Cliente cadastrarCliente (Cliente cliente) {
        if (repository.findByEmail(cliente.getEmail()).isPresent()) {
            throw new RuntimeException("Email já cadastrado");
        }

        Cliente salvo = repository.save(cliente);

        rabbitTemplate.convertAndSend(exchange, routingKey, salvo);

        return salvo;
    }
}
