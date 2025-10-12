import api from "../services/api";
import { ProposicoesResponse, ProposicaoResponse } from "../models/Proposicoes";
import { Votacao, Voto } from "../models/Votacoes";

export class ProposicoesRepository {


  public async findAll(pagina: string, itens: string): Promise<ProposicoesResponse[]> {

    try {
      const response = await api.get<ProposicoesResponse[]>(
        `/proposicoes?pagina=${pagina}&itens=${itens}`
      );

      return response.data;

    } catch (error) {
      console.error("Erro ao buscar proposicoes", error);
      throw error;
    }
  };


  public async findById(id: string) {
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

