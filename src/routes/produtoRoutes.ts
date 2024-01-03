import {Request, Response, Router} from "express"
import {cadastrarProdutoController, listarProdutoController, deletarProdutoController, atualizarProdutoController} from "../modules/produtos"

const routes = Router()

routes
    .post("/cadastrar", (request: Request, response: Response) => {
        cadastrarProdutoController.handle(request, response)
    })
    .get("/", (response: Response, request: Request) =>{
        listarProdutoController.handle(response, request)
    })
    .delete("/deletar", (request: Request, response: Response) =>{
        deletarProdutoController.handle(request, response)
    })
    .put("/editar/:id", (request: Request, response: Response) => {
        atualizarProdutoController.handle(request, response)
    })
export default routes