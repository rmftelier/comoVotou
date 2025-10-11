import api from "../services/api";
import { Proposicao } from "../models/Proposicoes";

export class ProposicoesRepository {


  public async findAll(): Promise<Proposicao[]> {

    try {
      const response = await api.get<{dados: Proposicao[]}>("/proposicoes")

      return response.data.dados;

    } catch (error) {
      console.error("Erro ao buscar proposicoes", error);
      throw error;
    }
  }
}