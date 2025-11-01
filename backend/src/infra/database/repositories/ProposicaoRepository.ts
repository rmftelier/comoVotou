import api from "@infra/api/api";
import { ProposicoesResponse, ProposicaoResponse } from "@core/models/Proposicao";
import { VotacaoResponse } from "@core/models/Votacao";
import { IProposicaoRepository } from "@core/repositories/IProposicaoRepository";

export class ProposicaoRepository implements IProposicaoRepository {

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

      const filtered: ProposicoesResponse = {
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


  public async findById(id: string): Promise<ProposicaoResponse> {
    try {
      const response = await api.get<ProposicaoResponse>(`/proposicoes/${id}`);

      const proposicao = response.data.dados;

      const filtered: ProposicaoResponse = {
        dados: {
          id: proposicao.id,
          siglaTipo: proposicao.siglaTipo,
          numero: proposicao.numero,
          ano: proposicao.ano,
          ementa: proposicao.ementa,
          dataApresentacao: proposicao.dataApresentacao,
          descricaoTipo: proposicao.descricaoTipo,
          statusProposicao: {
            dataHora: proposicao.statusProposicao.dataHora,
            regime: proposicao.statusProposicao.regime,
            descricaoTramitacao: proposicao.statusProposicao.descricaoTramitacao,
            descricaoSituacao: proposicao.statusProposicao.descricaoSituacao,
            despacho: proposicao.statusProposicao.despacho,
            ambito: proposicao.statusProposicao.ambito,
            apreciacao: proposicao.statusProposicao.apreciacao
          },
          ementaDetalhada: proposicao.ementaDetalhada,
          texto: proposicao.texto,
          justificativa: proposicao.justificativa
        }
      }

      return filtered;
    } catch (error) {
      console.error(`Erro ao buscar proposição do id: ${id}`);
      throw error;
    }
  };

  public async findVotacoesByProposicao(id: string): Promise<VotacaoResponse> {
    const response = await api.get<VotacaoResponse>(`/proposicoes/${id}/votacoes`);

    const filtered: VotacaoResponse = {
      dados: response.data.dados.map((votacao) => ({
        id: votacao.id,
        data: votacao.data,
        descricao: votacao.descricao,
        aprovacao: votacao.aprovacao,
      }))
    }
    return filtered;
  };

}

