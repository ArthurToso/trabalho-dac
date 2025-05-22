package exemplo1.microsservicos.consumidor.repository;

import exemplo1.microsservicos.consumidor.model.Voo;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class VooRepository {
    private final Map<String, Voo> voos = new ConcurrentHashMap<>();

    public void salvar(Voo voo) {
        voos.put(voo.getId(), voo);
    }

    public Optional<Voo> buscarPorId(String id) {
        return Optional.ofNullable(voos.get(id));
    }

    public Collection<Voo> listarTodos() {
        return voos.values();
    }
}