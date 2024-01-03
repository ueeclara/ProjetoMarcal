import { Response, Request } from "express";
import { LoginService } from "../services/login.service";

export class LoginController{
    constructor(private readonly service: LoginService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const {email, senha} = req.body

            if(!email){
                return res.status(400).send({message: "Email é obrigatório"})
            }
            if(!senha){
                return res.status(400).send({message: "Senha é obrigatória"})
            }

            const token = await this.service.execute(email, senha)

            if(!token){
                return res.status(404).send({message: "User não encontrado"})
            }else{
                return res.status(200).send(token)
            }
        } catch (error) {
            return res.status(500).send({message: `Erro ao logar - ${error}`})
        }
    }
}