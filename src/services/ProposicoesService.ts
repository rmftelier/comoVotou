import { ProposicoesRepository } from "../database/ProposicoesRepository";


export class ProposicoesService {
  constructor(private repository: ProposicoesRepository) { }

  public async getAll() {
    const proposicoes = await this.repository.findAll();

    return proposicoes;
  }
}