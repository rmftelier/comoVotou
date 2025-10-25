import { ProposicoesResponse } from "@core/models/Proposicao";
import { IProposicaoRepository } from "@core/repositories/IProposicaoRepository";
import { Votacao } from "@core/models/Votacao";

export class ProposicaoService {
  constructor(private repository: IProposicaoRepository) { }

  public async getAll(pagina: string, itens: string): Promise<ProposicoesResponse> {
    const proposicoes = await this.repository.findAll(pagina, itens);

    return proposicoes;
  }

  public async getById(id: string) {
    const proposicao = await this.repository.findById(id);

    if (!proposicao) {
      throw new Error(`Proposição com id ${id} não encontrada`);
    }
    
    return proposicao;
  }


  public async getVotacaoById(id: string): Promise<Votacao> {
    const votacoes = await this.repository.findVotacoesByProposicao(id);

    return votacoes;
  }

}