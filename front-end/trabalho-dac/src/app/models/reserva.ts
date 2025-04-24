export interface Reserva {
  id: number;
  id_user : number;
  codigo: string;
  dataHora: string;
  origem: string;
  destino: string;
  valor: number;
  milhas: number;
  status: 'CRIADA' | 'CHECK-IN' | 'CANCELADA' | 'CANCELADA VOO'| 'EMBARCADA' | 'REALIZADA' | 'NÃO REALIZADA'; // alterar valor dos status para uma tabela com Código do estado, Sigla do estado, Descrição do estado 
  canceladaEm?: string; 
  milhasDevolvidas?: number; 
}
