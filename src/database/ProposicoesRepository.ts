import api from "../services/api";
import { ProposicoesResponse } from "../models/Proposicoes";

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
  }
}