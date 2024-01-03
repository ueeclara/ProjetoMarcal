import user from "./userRoutes"
import login from "./loginRoutes"
import produtos from "./produtoRoutes"
import {Router} from "express"
import auth from "../middlewares/auth-middleware" 

const routes = Router()

routes.use(login , auth, user, produtos)

export default routes