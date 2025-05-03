export class Milha {
    constructor(
        public id_cliente? : number,
        public dataHora? : string,
        public quantidade? : number,
        public tipo : 'ENTRADA' | 'SAIDA' = 'ENTRADA',
        public descricao? : string,
        
    ){
    }
}
