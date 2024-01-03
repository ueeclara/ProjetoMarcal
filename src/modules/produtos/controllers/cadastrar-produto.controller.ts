import { ProdutoDTO } from "../dtos/produto.dto";
import { CadastrarProdutoService } from "../services/cadastrar-produto.service";
import {Response, Request} from "express"

export class CadastrarProdutoController{
    constructor(private readonly service: CadastrarProdutoService){}
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const produto = <ProdutoDTO>req.body
            await this.service.execute(produto)
            return res.status(200).send({message: "produto foi cadastrado com sucesso!"})
        } catch (error) {
            return res.status(500).send({message: "Erro ao cadastrar produto!"})
        }
    }
}