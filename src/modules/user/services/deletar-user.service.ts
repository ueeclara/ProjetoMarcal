import { UserDTO } from "../dtos/user.dto";
import {UserRepository} from "../repositories/user.repository"

export class DeletarUserService{
    constructor(private readonly repository: UserRepository){}
    async execute(email: string){
        await this.repository.deletar(email)
    }
}