import { Request, Response } from "express";
import { ProposicoesService } from "../services/ProposicoesService";

export class ProposicoesController {

  constructor(private service: ProposicoesService) { }

  public async getAllProposicoes(req: Request, res: Response) {

    try {
      const proposicoes = await this.service.getAll();
      return res.status(200).json(proposicoes);

    } catch (error: any) {
      return res.status(404).json({ message: error.message })
    }
  }

}