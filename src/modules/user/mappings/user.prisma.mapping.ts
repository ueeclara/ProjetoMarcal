import {users} from "@prisma/client"
import { UserEntity } from "../entities/user.entity"

export class UserPrismaMapping{
    static to(user: users): UserEntity{
        return {
            email: user.email,
            senha: user.senha,
        }
    }
    static from (user: UserEntity): users{
        return {
            email: user.email,
            senha: user.senha,
        }
    }
}