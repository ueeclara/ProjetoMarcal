import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";
import { ProdutoMapping } from "../mappings/produto.mapping";

export class CadastrarProdutoService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(user: ProdutoDTO):Promise<void>{
        const usuario = ProdutoMapping.from(user)
        await this.repository.cadastrar(usuario)       
    }
}