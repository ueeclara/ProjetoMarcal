import { Request, Response } from "express";
import { DeletarProdutoService } from "../services/deletar-produto.service";

export class DeletarProdutoController{
    constructor(private readonly service: DeletarProdutoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const id = Number(req.params.id)

            await this.service.execute(id)

            return res.status(200).send({message: "produto deletado!"})
        } catch (error) {
            return res.status(500).send({message: `Erro ao deletar produto - ${error}`})
        }
    }
}