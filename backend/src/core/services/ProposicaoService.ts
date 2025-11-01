import { ProposicaoResponse, ProposicoesResponse } from "@core/models/Proposicao";
import { IProposicaoRepository } from "@core/repositories/IProposicaoRepository";
import { VotacaoResponse } from "@core/models/Votacao";

export class ProposicaoService {
  constructor(private repository: IProposicaoRepository) { }

  public async getAll(pagina: string, itens: string): Promise<ProposicoesResponse> {
    const proposicoes = await this.repository.findAll(pagina, itens);

    if (!proposicoes) {
      throw new Error(`Proposições não encontradas`);
    }

    return proposicoes;
  }

  public async getById(id: string): Promise<ProposicaoResponse> {
    const proposicao = await this.repository.findById(id);

    if (!proposicao) {
      throw new Error(`Proposição com id ${id} não encontrada`);
    }

    return proposicao;
  }


  public async getVotacaoById(id: string): Promise<VotacaoResponse> {
    const votacoes = await this.repository.findVotacoesByProposicao(id);

    if (!votacoes) {
      throw new Error(`Proposição com o id: ${id} não possui votações atreladas a si.`)
    }

    return votacoes;
  }

}