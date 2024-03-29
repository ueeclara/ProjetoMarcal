import { Request, Response } from "express";
import { DeletarUserService } from "../services/deletar-user.service";
import { UserDTO } from "../dtos/user.dto";

export class DeletarUserController{
    constructor(private readonly service: DeletarUserService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const email = req.params.email

            await this.service.execute(email)

            return res.status(200).send({message: "User deletado!"})
        } catch (error) {
            return res.status(500).send({message: `Erro ao deletar user - ${error}`})
        }
    }
}