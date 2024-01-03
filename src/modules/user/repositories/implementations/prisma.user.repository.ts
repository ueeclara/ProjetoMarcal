import { UserEntity } from "../../entities/user.entity";
import { UserPrismaMapping } from "../../mappings/user.prisma.mapping";
import { UserRepository } from "../user.repository";
import { PrismaClient } from "@prisma/client"

export class PrismaUserRepository implements UserRepository{
    private prisma;
    constructor(){
        this.prisma = new PrismaClient()
    }
     async cadastrar(user: UserEntity): Promise<void> {
         try {
            await this.prisma.users.create({data: user})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async listar(): Promise<UserEntity[]> {
         try {
            const user = await this.prisma.users.findMany()
            return user.map(user => UserPrismaMapping.to(user))
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async atualizar(email: string, user: UserEntity): Promise<void> {
         try {
            await this.prisma.users.update({where: {email}, data: user})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async deletar(email: string): Promise<void> {
         try {
            await this.prisma.users.delete({where: {email}})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
}