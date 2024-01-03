import { UserEntity } from "../entities/user.entity";
import {UserDTO} from "../dtos/user.dto"

export class UserMapping{
    static from(user: UserDTO): UserEntity{
        return {
            nome: user.nome,
            categoria: user.categoria,
            descricao: user.descricao,
            preco: user.preco
        }
    }
}