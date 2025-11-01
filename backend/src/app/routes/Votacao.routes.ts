import { Router } from "express";
import { VotacaoController } from "@app/controllers/VotacaoController";
import { VotacaoRepository } from "@infra/database/repositories/VotacaoRepository";
import { VotacaoService } from "@core/services/VotacaoService";

const router = Router();

const repository = new VotacaoRepository();
const service = new VotacaoService(repository);
const controller = new VotacaoController(service);

router.get("/votacoes/:id/votos", async (req, res) => {
  await controller.getVotosByVotacao(req, res);
});

export { router as votacaoRoutes };

