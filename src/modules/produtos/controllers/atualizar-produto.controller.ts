import { Request, Response } from "express";
import { AtualizarProdutoService } from "../services/atualizar-produto.service";
import { ProdutoDTO } from "../dtos/produto.dto";

export class AtualizarProdutoController{
    constructor(private readonly service: AtualizarProdutoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const id = Number(req.params.id)
            const produto = <ProdutoDTO>req.body

            await this.service.execute(id, produto)
            return res.status(200).send({message: "produto atualizado com sucesso"})
        } catch (error) {
            return res.status(500).send({mesage: `Erro ao produto user - ${error} `})
        }
    }
}