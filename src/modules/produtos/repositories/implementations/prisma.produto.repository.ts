import { ProdutoDTO } from "../../dtos/produto.dto";
import { ProdutoEntity } from "../../entities/produto.entity";
import { ProdutoRepository } from "../produto.repository";
import { PrismaClient } from "@prisma/client"

export class PrismaProdutoRepository implements ProdutoRepository{
    private prisma;
    constructor(){
        this.prisma = new PrismaClient()
    }
     async cadastrar(produto: ProdutoEntity): Promise<void> {
         try {
            await this.prisma.produtos.create({data: produto})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async listar(): Promise<ProdutoEntity[]> {
         try {
            return await this.prisma.produtos.findMany()
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async atualizar(id: number, produto: ProdutoEntity): Promise<void> {
         try {
            await this.prisma.produtos.update({where: {id}, data: produto})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
     async deletar(id: number): Promise<void> {
         try {
            await this.prisma.produtos.delete({where: {id}})
         } catch (error) {
            throw new Error(`${error}`)
         }
     }
}