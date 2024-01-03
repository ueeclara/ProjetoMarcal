import { UserEntity } from "../../../user/entities/user.entity";
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
            const user = this.prisma.users.findFirstOrThrow({
                where: { email: email, senha: senha },
              });

            if(!user){
                throw new Error("Usuário não encontrado")
            }else{
                const token = jwt.sign(
                    {
                      id: user.id,
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