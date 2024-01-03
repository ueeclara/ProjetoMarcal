import { produtos } from "@prisma/client"
import { ProdutoEntity } from "../entities/produto.entity"

export class ProdutoPrismaMapping{
    static to(produto: produtos): ProdutoEntity{
        return {
            id: produto.id,
            categoria: produto.categoria,
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao
        }
    } 
}