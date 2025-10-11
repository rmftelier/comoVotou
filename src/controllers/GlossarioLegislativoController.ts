import { Request, Response } from "express";
import { GlossarioLegislativoService } from "../services/GlossarioLegislativoService";

export class GlossarioLegislativoController {
  constructor(private service: GlossarioLegislativoService) { }

  public async getAllTermos(req: Request, res: Response) {

    try {
      const termos = await this.service.getAll();
      return res.status(200).json(termos);

    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }

  }
}

