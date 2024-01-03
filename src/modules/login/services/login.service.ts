import { LoginRepository } from "../repositories/login.repository";

export class LoginService{
    constructor(private readonly repository: LoginRepository){}
    async execute(email: string, senha: string){
        return await this.repository.login(email, senha)
    }
}