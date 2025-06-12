package main.java.dac.login.demo.orchestrator;

import br.com.suaplicacao.sagaorchestrator.producer.EmployeeProducer;
import br.com.suaplicacao.sagaorchestrator.producer.AuthProducer;
import br.com.suaplicacao.sagaorchestrator.dto.*;
import br.com.suaplicacao.sagaorchestrator.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeOrchestrator {

    @Autowired
    private AuthProducer authProducer;

    @Autowired
    private EmployeeProducer employeeProducer;

}