package com.example.cadastraCliente.Controller;

import com.example.cadastraCliente.Cliente.Cliente;
import com.example.cadastraCliente.Services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService service;

    @PostMapping
    public ResponseEntity<Cliente> criarCliente (@Valid @RequestBody Cliente cliente) {
        Cliente salvo = service.cadastrarCliente(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

}
