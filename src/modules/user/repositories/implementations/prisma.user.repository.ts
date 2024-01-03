import { UserDTO } from "../../dtos/user.dto";
import { UserEntity } from "../../entities/user.entity";
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
            return await this.prisma.users.findMany()
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async atualizar(id: number, user: UserEntity): Promise<void> {
         try {
            await this.prisma.users.update({where: {id}, data: user})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async deletar(id: number): Promise<void> {
         try {
            await this.prisma.users.delete({where: {id}})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
}