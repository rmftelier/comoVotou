import api from "@infra/api/api";
import { ProposicoesResponse, ProposicaoResponse } from "@core/models/Proposicoes";
import { Votacao, Voto } from "@core/models/Votacoes";
import { IProposicoesRepository } from "@core/repositories/IProposicoesRepository";

export class ProposicoesRepository implements IProposicoesRepository{

  public async findAll(pagina: string, itens: string): Promise<ProposicoesResponse[]> {

    try {
      const response = await api.get<ProposicoesResponse[]>(
        `/proposicoes?pagina=${pagina ?? "1"}&itens=${itens ?? "15"}`
      );

      return response.data;

    } catch (error) {
      console.error("Erro ao buscar proposicoes", error);
      throw error;
    }
  };


  public async findById(id: string): Promise<any>{
    try {
      const response = await api.get<ProposicaoResponse[]>(`/proposicoes/${id}`);

      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar proposição do id: ${id}`);
      throw error;
    }
  };

  public async findVotacoesByProposicao(id: string){
      const response = await api.get<{ dados: Votacao[]}>(`/proposicoes/${id}/votacoes`);

      return response.data.dados;
  };


  public async findVotosByVotacao(idVotacao: string) {
     const response = await api.get<{ dados: Voto[]}>(`votacoes/${idVotacao}/votos`);

     return response.data.dados;
  }
}

