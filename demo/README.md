# Projeto Spring Boot com MongoDB

Este projeto é uma aplicação Spring Boot que utiliza o MongoDB como banco de dados. Abaixo estão as informações sobre a estrutura do projeto e como configurá-lo.

## Estrutura do Projeto

```
demo
├── src
│   ├── main
│   │   ├── java
│   │   │   └── dac
│   │   │       └── login
│   │   │           └── demo
│   │   │               ├── LoginApplication.java
│   │   │               ├── config
│   │   │               │   └── MongoConfig.java
│   │   │               ├── controller
│   │   │               │   └── UserController.java
│   │   │               ├── model
│   │   │               │   └── User.java
│   │   │               └── repository
│   │   │                   └── UserRepository.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── application.yml
├── pom.xml
└── README.md
```

## Dependências

Certifique-se de que as seguintes dependências estão incluídas no seu `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

## Configuração do MongoDB

As configurações do MongoDB devem ser definidas no arquivo `application.properties` ou `application.yml`. Exemplo de configuração no `application.properties`:

```
spring.data.mongodb.uri=mongodb://localhost:27017/nome_do_banco
```

## Como Executar

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Execute o comando `mvn spring-boot:run` para iniciar a aplicação.

## Endpoints

A aplicação expõe endpoints para gerenciar usuários. Consulte a classe `UserController` para mais detalhes sobre as operações disponíveis.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Abra um pull request ou crie uma issue para discutir mudanças.

## Licença

Este projeto está licenciado sob a MIT License.