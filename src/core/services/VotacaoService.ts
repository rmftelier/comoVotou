import { VotosResponse } from "@core/models/Votacao";
import { VotacaoRepository } from "@infra/database/repositories/VotacaoRepository";

export class VotacaoService {
  constructor(private repository: VotacaoRepository) { }

  public async getVotosById(id: string): Promise<VotosResponse> {

    const votos = await this.repository.findVotosByVotacao(id);

    if (!votos) {
      throw new Error(`Votação com o id: ${id} não foi encontrada`);
    }

    return votos;
  };
};