import {Request, Response, Router} from "express"
import {atualizarUserController, cadastrarUserController, deletarUserController, listarUserController} from "../modules/user/index"

const routes = Router()

routes
    .post("/cadastrarUser", (request: Request, response: Response) => {
        cadastrarUserController.handle(request, response)
    })
    .get("/listarUser", (response: Response, request: Request) =>{
        listarUserController.handle(response, request)
    })
    .delete("deletarUser", (request: Request, response: Response) =>{
        deletarUserController.handle(request, response)
    })
    .put("atualizarUser", (request: Request, response: Response) => {
        atualizarUserController.handle(request, response)
    })
export default routes