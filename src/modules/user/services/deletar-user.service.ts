import { UserDTO } from "../dtos/user.dto";
import {UserRepository} from "../repositories/user.repository"

export class DeletarUserService{
    constructor(private readonly repository: UserRepository){}
    async execute(id: number){
        await this.repository.deletar(id)
    }
}