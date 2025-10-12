import { Router } from "express";
import { ProposicoesController } from "../controllers/ProposicoesController";
import { ProposicoesService } from "../services/ProposicoesService";
import { ProposicoesRepository } from "../database/ProposicoesRepository";

const router = Router();

const repository = new ProposicoesRepository();
const service = new ProposicoesService(repository);
const controller = new ProposicoesController(service);

router.get("/proposicoes", async (req, res) => {
  await controller.getAllProposicoes(req, res);
});

export { router as proposicoesRoutes }