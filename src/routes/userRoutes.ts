import {Request, Response, Router} from "express"
import {atualizarUserController, cadastrarUserController, deletarUserController, listarUserController} from "../modules/user/index"

const routes = Router()

routes
    .post("/cadastrar", (request: Request, response: Response) => {
        cadastrarUserController.handle(request, response)
    })
    .get("/", (response: Response, request: Request) =>{
        listarUserController.handle(response, request)
    })
    .delete("/deletar", (request: Request, response: Response) =>{
        deletarUserController.handle(request, response)
    })
    .put("/editar/:id", (request: Request, response: Response) => {
        atualizarUserController.handle(request, response)
    })
export default routes