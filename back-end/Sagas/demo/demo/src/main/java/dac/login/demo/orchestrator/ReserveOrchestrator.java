package main.java.dac.login.demo.orchestrator;

import dac.login.demo.producer.ReserveProducer;
import dac.login.demo.producer.FlightProducer;
import dac.login.demo.producer.CustomerProducer;
import dac.login.demo.dto.*;
import dac.login.demo.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReserveOrchestrator {

    @Autowired
    private ReserveProducer reserveProducer;

    @Autowired
    private FlightProducer flightProducer;

    @Autowired
    private CustomerProducer customerProducer;

}