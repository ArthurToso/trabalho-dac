export class Reserva {
  constructor(
    public id: number,
    public id_user? : number,
    public codigo?: string,
    public dataHora?: string,
    public origem?: string,
    public destino?: string,
    public valor?: number,
    public milhas?: number,
    public status?: 'CRIADA' | 'CHECK-IN' | 'CANCELADA' | 'CANCELADA VOO'| 'EMBARCADA' | 'REALIZADA' | 'NÃO REALIZADA', // alterar valor dos status para uma tabela com Código do estado, Sigla do estado, Descrição do estado 
    public canceladaEm?: string, 
    public milhasDevolvidas?: number, 
  ){} 
 
}
