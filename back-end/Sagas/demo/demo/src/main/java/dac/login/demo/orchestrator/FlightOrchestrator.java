package main.java.dac.login.demo.orchestrator;

import br.com.suaplicacao.sagaorchestrator.producer.FlightProducer;
import br.com.suaplicacao.sagaorchestrator.producer.ReserveProducer;
import br.com.suaplicacao.sagaorchestrator.producer.CustomerProducer;
import br.com.suaplicacao.sagaorchestrator.dto.*;
import br.com.suaplicacao.sagaorchestrator.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FlightOrchestrator {

    @Autowired
    private FlightProducer flightProducer;

    @Autowired
    private ReserveProducer reserveProducer;

    @Autowired
    private CustomerProducer customerProducer;

}