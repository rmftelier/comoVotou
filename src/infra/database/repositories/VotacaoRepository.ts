import api from "@infra/api/api";
import { IVotacaoRepository } from "@core/repositories/IVotacaoRepository";
import { VotosResponse } from "@core/models/Votacao";

export class VotacaoRepository implements IVotacaoRepository {

    public async findVotosByVotacao(id: string): Promise<VotosResponse> {

        const response = await api.get<VotosResponse>(`votacoes/${id}/votos`);

        const filtered: VotosResponse = {
            dados: response.data.dados.map((voto) => ({
                tipoVoto: voto.tipoVoto,
                dataRegistroVoto: voto.dataRegistroVoto,
                deputado_: {
                    id: voto.deputado_.id,
                    nome: voto.deputado_.nome,
                    siglaPartido: voto.deputado_.siglaPartido,
                    siglaUf: voto.deputado_.siglaUf,
                    urlFoto: voto.deputado_.urlFoto
                }
            }))
        }

        return filtered;
    }
}