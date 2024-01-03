import {users} from "@prisma/client"
import { UserEntity } from "../entities/user.entity"

export class UserPrismaMapping{
    static to(user: users): UserEntity{
        return {
            id: user.id,
            categoria: user.categoria,
            nome: user.nome,
            preco: user.preco,
            descricao: user.descricao
        }
    } 
}