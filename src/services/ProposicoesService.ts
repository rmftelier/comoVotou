import { ProposicoesRepository } from "../database/ProposicoesRepository";


export class ProposicoesService {
  constructor(private repository: ProposicoesRepository) { }

  public async getAll(pagina: string, itens: string) {
    const proposicoes = await this.repository.findAll(pagina, itens);

    return proposicoes;
  }
}