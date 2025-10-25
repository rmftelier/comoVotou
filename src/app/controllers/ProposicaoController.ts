import { Request, Response } from "express";
import { ProposicaoService } from "@core/services/ProposicaoService";

export class ProposicaoController {

  constructor(private service: ProposicaoService) { }

  public async getAllProposicoes(req: Request, res: Response) {

    const { pagina, itens } = req.query;

    try {
      const proposicoes = await this.service.getAll(pagina as string, itens as string);
      return res.status(200).json(proposicoes);

    } catch (error: any) {
      return res.status(404).json({ message: error.message })
    }
  }

  public async getProposicaoById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const proposicao = await this.service.getById(id);
      console.log(proposicao);
      return res.status(200).json(proposicao);

    } catch (error: any) {
      return res.status(404).json({ message: error.message })
    }
  }


  public async getVotacoesByProposicao(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const votacoes = await this.service.getVotacaoById(id);

      return res.status(200).json(votacoes);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}