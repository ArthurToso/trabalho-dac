package com.example.cadastraCliente.Services;

import com.example.cadastraCliente.exception.EmailJaCadastradoException;
import com.example.cadastraCliente.model.Cliente;
import com.example.cadastraCliente.Repository.ClienteRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public Cliente cadastrarCliente (Cliente cliente) {
        if (repository.findByEmail(cliente.getEmail()).isPresent()) {
            throw new EmailJaCadastradoException("Email já cadastrado");
        }

        Cliente salvo = repository.save(cliente);

        return salvo;
    }
}
