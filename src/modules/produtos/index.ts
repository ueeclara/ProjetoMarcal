import {PrismaProdutoRepository} from "./repositories/implementations/prisma.produto.repository"

import { CadastrarProdutoService } from "./services/cadastrar-produto.service";
import { CadastrarProdutoController } from "./controllers/cadastrar-produto.controller";
import { ListarProdutoService } from "./services/listar-produto.service";
import { ListarProdutoController } from "./controllers/listar-produto.controller";
import { DeletarProdutoService } from "./services/deletar-produto.service";
import { DeletarProdutoController } from "./controllers/deletar-produto.controller";
import { AtualizarProdutoService } from "./services/atualizar-produto.service";
import { AtualizarProdutoController } from "./controllers/atualizar-produto.controller";

const repository = new PrismaProdutoRepository()

const cadastrarProdutoService = new CadastrarProdutoService(repository)
const cadastrarProdutoController = new CadastrarProdutoController(cadastrarProdutoService)

const listarProdutoService = new ListarProdutoService(repository)
const listarProdutoController = new ListarProdutoController(listarProdutoService)

const deletarProdutoService = new DeletarProdutoService(repository)
const deletarProdutoController = new DeletarProdutoController(deletarProdutoService)

const atualizarProdutoService = new AtualizarProdutoService(repository)
const atualizarProdutoController = new AtualizarProdutoController( atualizarProdutoService)

export { cadastrarProdutoController, listarProdutoController, deletarProdutoController, atualizarProdutoController}