import { UserDTO } from "../dtos/user.dto"
import { UserEntity } from "../entities/user.entity"

export interface UserRepository{
    cadastrar(user: UserDTO): Promise<void>
    listar():Promise<UserEntity[]>
    atualizar(email: string, user: UserEntity): Promise<void>
    deletar(email: String): Promise<void>
}