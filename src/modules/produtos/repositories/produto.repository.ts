import { ProdutoDTO } from "../dtos/produto.dto"
import { ProdutoEntity } from "../entities/produto.entity"

export interface ProdutoRepository{
    cadastrar(user: ProdutoDTO): Promise<void>
    listar():Promise<ProdutoEntity[]>
    atualizar(id:number, user: ProdutoEntity): Promise<void>
    deletar(id:number): Promise<void>
}