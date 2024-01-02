import { UserDTO } from "../dtos/user.dto"
import { UserEntity } from "../entities/user.entity"

export interface UserRepository{
    cadastrar(user: UserDTO): Promise<void>
    listar():Promise<UserEntity[]>
    atualizar(id:number, user: UserEntity): Promise<void>
    deletar(id:number): Promise<void>
}