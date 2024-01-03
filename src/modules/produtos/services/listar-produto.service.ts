import { ProdutoEntity } from "../entities/produto.entity";
import { ProdutoRepository } from "../repositories/produto.repository";

export class ListarProdutoService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute():Promise<ProdutoEntity[]>{
        return await this.repository.listar()
    }
}