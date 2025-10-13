import { ProposicoesResponse } from "@core/models/Proposicoes";

export interface IProposicoesRepository {
  findAll(pagina: string, itens: string): Promise<ProposicoesResponse[]>;
  findById(id: string): Promise<any>;
  findVotacoesByProposicao(id: string): Promise<any>;
  findVotosByVotacao(idVotacao: string): Promise<any>;
}