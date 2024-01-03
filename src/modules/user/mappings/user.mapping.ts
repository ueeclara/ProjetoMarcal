import { UserEntity } from "../entities/user.entity";
import {UserDTO} from "../dtos/user.dto"

export class UserMapping{
    static from(user: UserDTO): UserEntity{
        return {
            email: user.email,
            senha: user.senha
        }
    }
}