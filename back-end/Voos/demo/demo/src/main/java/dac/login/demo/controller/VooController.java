package exemplo1.microsservicos.consumidor.controller;

import exemplo1.microsservicos.consumidor.model.Voo;
import exemplo1.microsservicos.consumidor.repository.VooRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class VooController {

    private final VooRepository vooRepository;

    public VooController(VooRepository vooRepository) {
        this.vooRepository = vooRepository;
    }

    @GetMapping("/voos")
    public Collection<Voo> listarVoos() {
        return vooRepository.listarTodos();
    }

    @GetMapping("/voos/{id}")
    public Voo buscarPorId(@PathVariable String id) {
        return vooRepository.buscarPorId(id).orElse(null);
    }
}