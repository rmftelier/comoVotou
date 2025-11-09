import { comoVotouApi } from "../api";
import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";

//Interfaces e Tipos:-----------------------------------------------------------

export interface Votacao {
  id: number;
  data: string;
  descricao: string;
  aprovacao: boolean;
}

export interface Deputado {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
}

export interface Voto {
  tipoVoto: string;
  dataRegistroVoto: string;
  deputado_: Deputado;
}

export interface VotosResponse {
  dados: Voto[];
}

export interface VotacaoResponse {
  dados: Votacao[];
}

//Axios Requests:---------------------------------------------------------------

export const getVotacoesByProposicao = async (id: string): Promise<VotacaoResponse> =>
  comoVotouApi.get<VotacaoResponse>(`/proposicoes/${id}/votacoes`)
    .then((res) => res.data);

export const getVotosByVotacao = async (id: string): Promise<VotosResponse> =>
  comoVotouApi.get<VotosResponse>(`/votacoes/${id}/votos`)
    .then((res) => res.data);

//Querys Keys:------------------------------------------------------------------

export const getVotacoesByProposicaoQueryKey = (id: string): QueryKey => ['votacoes', id];

export const getVotosByVotacaoQueryKey = (id: string): QueryKey => ['votacoes', id];

//Querys:-----------------------------------------------------------------------

export const useGetVotacoesByProposicao = (id: string): UseQueryResult<VotacaoResponse> =>
  useQuery<VotacaoResponse>({
    queryKey: getVotacoesByProposicaoQueryKey(id),
    queryFn: () => getVotacoesByProposicao(id),
    enabled: !!id
  });

export const useGetVotosByVotacao = (id: string): UseQueryResult<VotosResponse> =>
  useQuery<VotosResponse>({
    queryKey: getVotosByVotacaoQueryKey(id),
    queryFn: () => getVotosByVotacao(id),
    enabled: !!id
  });