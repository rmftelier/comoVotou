import { Router } from "express";
import { ProposicoesController } from "@app/controllers/ProposicoesController";
import { ProposicoesService } from "@core/services/ProposicoesService";
import { ProposicoesRepository } from "@infra/database/repositories/ProposicoesRepository";

const router = Router();

const repository = new ProposicoesRepository();
const service = new ProposicoesService(repository);
const controller = new ProposicoesController(service);

router.get("/proposicoes", async (req, res) => {
  await controller.getAllProposicoes(req, res);
});

router.get("/proposicoes/:id", async (req, res) => {
  await controller.getProposicaoById(req, res);
})

export { router as proposicoesRoutes }