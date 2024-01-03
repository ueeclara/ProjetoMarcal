import { UserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";
import { UserMapping } from "../mappings/user.mapping";

export class CadastrarUserService{
    constructor(private readonly repository: UserRepository){}
    async execute(user: UserDTO):Promise<void>{
        const usuario = UserMapping.from(user)
        await this.repository.cadastrar(usuario)       
    }
}