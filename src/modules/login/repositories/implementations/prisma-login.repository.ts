import { UserPrismaMapping } from "../../../user/mappings/user.prisma.mapping";
import { LoginRepository } from "../login.repository";
import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"

export class PrismaLoginRepository implements LoginRepository{
    private prisma;
    constructor(){
        this.prisma = new PrismaClient()
    }
    async login(email: string, senha: string): Promise<String>{
        try {
            const user = await this.prisma.users.findFirstOrThrow({where: {email, senha}})

            if(!user){
                throw new Error("Usuário não encontrado")
            }else{
                const usuario = UserPrismaMapping.to(user)
                
                const token = jwt.sign(
                    {
                      id: usuario.id,
                    },
                    `${process.env.SECRET}`,
                    {
                      expiresIn: "1h",
                    }
                  );
            
                  return token ;
            }

            
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}