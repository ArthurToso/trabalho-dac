export class Milha {
    constructor(
        public id_cliente? : number,
        public dataHora? : string,
        public quantidade? : number,
        public tipo : string = 'ENTRADA',
        public descricao? : string,
    ){

    }
}
