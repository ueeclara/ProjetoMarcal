import { ListarProdutoService } from "../services/listar-produto.service";
import { Request, Response } from "express";

export class ListarProdutoController{
    constructor(private readonly service: ListarProdutoService){}
    async handle(res: Response, req: Request):Promise<Response>{
        try {
            const produtos = await this.service.execute()
            return res.status(200).send(produtos)
        } catch (error) {
            return res.status(500).send({message: `Erro ao listar produtos - ${error}`})
        }
    }
}