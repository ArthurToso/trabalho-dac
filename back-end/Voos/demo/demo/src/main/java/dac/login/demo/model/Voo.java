package exemplo1.microsservicos.consumidor.model;

public class Voo {
    private String codigo_voo;
    private String dataHora;
    private String origem;
    private String destino;
    private double valor_passagem;
    private int poltronas_total;
    private int poltronas_ocupadas;
    private String status;
    private String id;

    // Getters e setters
    // Construtores

}

    public function getCodigoVoo() {
        return codigo_voo;
    }

    public void setCodigoVoo(String codigo_voo) {
        this.codigo_voo = codigo_voo;
    }

    public String getDataHora() {
        return dataHora;
    }

    public void setDataHora(String dataHora) {
        this.dataHora = dataHora;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }