import { IProposicoesRepository } from "@core/repositories/IProposicoesRepository";

export class ProposicoesService {
  constructor(private repository: IProposicoesRepository) { }

  public async getAll(pagina: string, itens: string) {
    const proposicoes = await this.repository.findAll(pagina, itens);

    return proposicoes;
  }

  public async getById(id: string) {
    const proposicao = await this.repository.findById(id);

    if (!proposicao) {
      throw new Error(`Proposição com id ${id} não encontrada`);
    }

    const votacoes = await this.repository.findVotacoesByProposicao(id);

    const votacoesComVotos = await Promise.all(
      votacoes.map(async (votacao: { id: string; }) => {
        const votos = await this.repository.findVotosByVotacao(votacao.id);
        return { ...votacao, votos };
      })
    );

    return { ...proposicao, votacoes: votacoesComVotos };
  }

}