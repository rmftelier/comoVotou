import { VotosResponse } from "@core/models/Votacao";

export interface IVotacaoRepository {
  findVotosByVotacao(id: string): Promise<VotosResponse>;
}