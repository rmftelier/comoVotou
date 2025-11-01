import { ProposicaoResponse, ProposicoesResponse } from "@core/models/Proposicao";
import { VotacaoResponse } from "@core/models/Votacao";

export interface IProposicaoRepository {
  findAll(pagina: string, itens: string): Promise<ProposicoesResponse>;
  findById(id: string): Promise<ProposicaoResponse>;
  findVotacoesByProposicao(id: string): Promise<VotacaoResponse>;
}