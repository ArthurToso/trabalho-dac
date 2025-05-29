package exemplo1.microsservicos.consumidor.dto;

public class ReservaEvent {
    private String id;
    private String action; // CREATE, CANCEL, CONFIRM, etc
    private String status;
    private String payload; // pode ser um JSON com detalhes

    // getters e setters
}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(String payload) {
        this.payload = payload;
    }
