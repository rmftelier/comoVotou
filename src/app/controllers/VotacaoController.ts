import { Request, Response } from "express";
import { VotacaoService } from "@core/services/VotacaoService";

export class VotacaoController {
  constructor(private service: VotacaoService) { }

  public async getVotosByVotacao(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const votos = await this.service.getVotosById(id);
 
      return res.status(200).json(votos);

    } catch (error: any) {
      return res.status(404).json({ message: error.message })
    }
  }
}