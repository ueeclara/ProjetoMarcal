import { UserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";

export class AtualizarUserService{
    constructor(private readonly repository: UserRepository){}
    async execute(email: string, novoUser: UserDTO):Promise<void>{
        await this.repository.atualizar(email, novoUser)
    }
}