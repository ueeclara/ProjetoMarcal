import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class ListarUserService{
    constructor(private readonly repository: UserRepository){}
    async execute():Promise<UserEntity[]>{
        return await this.repository.listar()
    }
}