import { ListarUserService } from "../services/listar-user.service";
import { Request, Response } from "express";

export class ListarUserController{
    constructor(private readonly service: ListarUserService){}
    async handle(res: Response, req: Request):Promise<Response>{
        try {
            const users = await this.service.execute()
            return res.status(200).send(users)
        } catch (error) {
            return res.status(500).send({message: `Erro ao listar users - ${error}`})
        }
    }
}