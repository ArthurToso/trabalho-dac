package dac.login.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;

@Configuration
public class MongoConfig {

    @Bean
    public SimpleMongoClientDatabaseFactory mongoDbFactory() {
        // Substitua <db_password> pela senha do seu usuário no MongoDB Atlas
        String connectionString = "mongodb://atlas-sample-dataset-load-67f73d0d05590c11b619e4f4:<teste>@ac-ajjau9o-shard-00-00.b3nwi9x.mongodb.net:27017,ac-ajjau9o-shard-00-01.b3nwi9x.mongodb.net:27017,ac-ajjau9o-shard-00-02.b3nwi9x.mongodb.net:27017/?replicaSet=atlas-mdm2ec-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Dac";
        return new SimpleMongoClientDatabaseFactory(connectionString);
    }

    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoDbFactory());
    }
}