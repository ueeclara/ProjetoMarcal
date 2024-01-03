import user from "./userRoutes"
import login from "./loginRoutes"
import {Router} from "express"
import auth from "../middlewares/auth-middleware" 

const routes = Router()

routes.use(login , auth, user)

export default routes