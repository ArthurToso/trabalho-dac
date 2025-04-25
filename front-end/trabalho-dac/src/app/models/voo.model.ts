export class Voo {
  constructor(
    public codigo_voo?: string,
    public data_hora?: string, 
    public aeroporto_origem?: string,
    public aeroporto_destino?: string,
    public valor_passagem?: number,
    public poltronas_total?: number,
    public poltronas_ocupadas?: number,
    public estado_voo?: string
  ) {}
}
