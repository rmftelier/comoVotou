import api from "@infra/api/api";
import { ProposicoesResponse, ProposicaoResponse } from "@core/models/Proposicao";
import { Votacao, Voto } from "@core/models/Votacao";
import { IProposicaoRepository } from "@core/repositories/IProposicaoRepository";

export class ProposicaoRepository implements IProposicaoRepository{

  public async findAll(pagina: string, itens: string): Promise<ProposicoesResponse> {

    try {

      const paginaParam = pagina || "1";
      const itensParam = itens || "15";

      const response = await api.get<ProposicoesResponse>(
        `/proposicoes?pagina=${paginaParam}&itens=${itensParam}`
      );

      if (!response.data || !response.data.dados) {
        throw new Error("Resposta inesperada da API: 'dados' está ausente.");
      }

      const filtered : ProposicoesResponse = {
        dados: response.data.dados.map((proposicao) => ({
           id: proposicao.id, 
           siglaTipo: proposicao.siglaTipo, 
           numero: proposicao.numero, 
           ano: proposicao.ano, 
           ementa: proposicao.ementa
        })), 
        links: response.data.links || []
      }


      return filtered;

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
      const response = await api.get<Votacao[]>(`/proposicoes/${id}/votacoes`);

      return response.data;
  };

}

