import { ProposicoesResponse } from "@core/models/Proposicao";

export interface IProposicaoRepository {
  findAll(pagina: string, itens: string): Promise<ProposicoesResponse>;
  findById(id: string): Promise<any>;
  findVotacoesByProposicao(id: string): Promise<any>;
}