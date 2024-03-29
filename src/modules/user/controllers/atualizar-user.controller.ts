import { Request, Response } from "express";
import { AtualizarUserService } from "../services/atualizar-user.service";
import { UserDTO } from "../dtos/user.dto";

export class AtualizarUserController{
    constructor(private readonly service: AtualizarUserService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const email = req.params.email
            const user = <UserDTO>req.body

            await this.service.execute(email, user)
            return res.status(200).send({message: "User atualizado com sucesso"})
        } catch (error) {
            return res.status(500).send({mesage: `Erro ao atualizar user - ${error} `})
        }
    }
}