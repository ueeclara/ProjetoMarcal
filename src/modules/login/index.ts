import {PrismaLoginRepository} from "./repositories/implementations/prisma-login.repository"

import { LoginController } from "./controllers/login.controller"
import { LoginService } from "./services/login.service"

const repository = new PrismaLoginRepository()

const loginService = new LoginService(repository)
const loginController = new LoginController(loginService)

export {loginController}