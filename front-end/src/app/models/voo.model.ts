export class Voo {
  
  constructor(
    public id?: number,
    public dataHora?: string, 
    public origem?: string,
    public destino?: string,
    public valor_passagem?: number,
    public poltronas_total?: number,
    public poltronas_ocupadas?: number,
    public status?: string,
    public codigo_voo?: number
  ) {}
}
