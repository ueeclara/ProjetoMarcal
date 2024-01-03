import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class DeletarProdutoService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(id: number){
        await this.repository.deletar(id)
    }
}