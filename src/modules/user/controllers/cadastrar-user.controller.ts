import { UserDTO } from "../dtos/user.dto";
import { CadastrarUserService } from "../services/cadastrar-user.service";
import {Response, Request} from "express"

export class CadastrarUserController{
    constructor(private readonly service: CadastrarUserService){}
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const user = <UserDTO>req.body
            await this.service.execute(user)
            return res.status(200).send({message: "Usuário foi cadastrado com sucesso!"})
        } catch (error) {
            return res.status(500).send({message: "Erro ao cadastrar usuário!"})
        }
    }
}