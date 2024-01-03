import {PrismaUserRepository} from "./repositories/implementations/prisma.user.repository"

import { CadastrarUserService } from "./services/cadastrar-user.service";
import { CadastrarUserController } from "./controllers/cadastrar-user.controller";
import { ListarUserService } from "./services/listar-user.service";
import { ListarUserController } from "./controllers/listar-user.controller";
import { DeletarUserService } from "./services/deletar-user.service";
import { DeletarUserController } from "./controllers/deletar-user.controller";
import { AtualizarUserService } from "./services/atualizar-user.service";
import { AtualizarUserController } from "./controllers/atualizar-user.controller";

const repository = new PrismaUserRepository()

const cadastrarUserService = new CadastrarUserService(repository)
const cadastrarUserController = new CadastrarUserController(cadastrarUserService)

const listarUserService = new ListarUserService(repository)
const listarUserController = new ListarUserController(listarUserService)

const deletarUserService = new DeletarUserService(repository)
const deletarUserController = new DeletarUserController(deletarUserService)

const atualizarUserService = new AtualizarUserService(repository)
const atualizarUserController = new AtualizarUserController( atualizarUserService)

export { cadastrarUserController, listarUserController, deletarUserController, atualizarUserController}