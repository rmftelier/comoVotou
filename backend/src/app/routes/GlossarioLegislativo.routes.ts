import { Router } from "express";
import { GlossarioLegislativoRepository } from "@infra/database/repositories/GlossarioLegislativoRepository";
import { GlossarioLegislativoController } from "@app/controllers/GlossarioLegislativoController";
import { GlossarioLegislativoService } from "@core/services/GlossarioLegislativoService";

const router = Router();

const repository = new GlossarioLegislativoRepository();
const service = new GlossarioLegislativoService(repository);
const controller = new GlossarioLegislativoController(service);

router.get("/glossario", async (req, res) => {
  await controller.getAllTermos(req, res);
});

export { router as glossarioRoutes }