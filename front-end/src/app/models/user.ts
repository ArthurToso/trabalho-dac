export class User {
  constructor(
    public perfil: string = 'CLIENTE',
    public senha: string,
    public id: string,
    public cpf?: string,
    public nome?: string,
    public email?: string,
    public cep?: string,
    public rua?: string,
    public bairro?: string,
    public cidade?: string,
    public estado?: string,
    public numero?: string,
    public milhas: number = 0
  ) {}
}
