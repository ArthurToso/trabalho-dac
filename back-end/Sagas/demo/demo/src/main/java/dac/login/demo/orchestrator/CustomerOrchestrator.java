package main.java.dac.login.demo.orchestrator;

import br.com.suaplicacao.sagaorchestrator.producer.CustomerProducer;
import br.com.suaplicacao.sagaorchestrator.producer.AuthProducer;
import br.com.suaplicacao.sagaorchestrator.dto.*;
import br.com.suaplicacao.sagaorchestrator.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerOrchestrator {

    @Autowired
    private CustomerProducer customerProducer;

    @Autowired
    private AuthProducer authProducer;

    public CustomerResponseDTO processRegisterCustomer(CustomerRequestDTO customerRequest) {
        SagaResponse<CustomerResponseDTO> customerResponse = customerProducer.sendCreateCustomer(customerRequest);

        if (!customerResponse.isSuccess()) {
            throw new BusinessException(customerResponse.getError());
        }

        SagaResponse<CreateAuthResponseDTO> authResponse = authProducer.sendCreateAuth(
                new CreateAuthRequestDTO(customerRequest.getEmail(), null, Roles.CUSTOMER));

        if (!authResponse.isSuccess()) {
            customerProducer.sendRollbackCreateCustomer(customerResponse.getData().getCode());
            throw new BusinessException(authResponse.getError());
        }

        return (CustomerResponseDTO) customerResponse.getData();
    }
}