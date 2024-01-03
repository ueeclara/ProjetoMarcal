import { Request, Response, Router } from "express";
import { loginController } from "../modules/login";

const routes = Router()

routes.post("/login", (request: Request, response: Response) => {
    loginController.handle(request, response)
})

export default routes