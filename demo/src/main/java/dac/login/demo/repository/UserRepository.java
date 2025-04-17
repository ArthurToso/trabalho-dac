package dac.login.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import dac.login.demo.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    // Métodos adicionais de consulta podem ser definidos aqui, se necessário
}