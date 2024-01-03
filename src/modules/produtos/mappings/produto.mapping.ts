import { ProdutoEntity } from "../entities/produto.entity";
import {ProdutoDTO} from "../dtos/produto.dto"

export class ProdutoMapping{
    static from(produto: ProdutoDTO): ProdutoEntity{
        return {
            nome: produto.nome,
            categoria: produto.categoria,
            descricao: produto.descricao,
            preco: produto.preco
        }
    }
}