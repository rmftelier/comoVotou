import { Router } from "express";
import { ProposicaoController } from "@app/controllers/ProposicaoController";
import { ProposicaoService } from "@core/services/ProposicaoService";
import { ProposicaoRepository } from "@infra/database/repositories/ProposicaoRepository";

const router = Router();

const repository = new ProposicaoRepository();
const service = new ProposicaoService(repository);
const controller = new ProposicaoController(service);

router.get("/proposicoes", async (req, res) => {
  await controller.getAllProposicoes(req, res);
});

router.get("/proposicoes/:id", async (req, res) => {
  await controller.getProposicaoById(req, res);
});

router.get("/proposicoes/:id/votacoes", async (req, res) => {
  await controller.getVotacoesByProposicao(req, res);
})

export { router as proposicaoRoutes }