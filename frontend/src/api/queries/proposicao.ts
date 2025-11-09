import { comoVotouApi } from "../api";
import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";


//Interfaces e Tipos:-----------------------------------------------------------

export interface ProposicaoSimples {
  id: number;
  siglaTipo: string;
  numero: number;
  ano: number;
  ementa: string;
}

export interface Links {
  rel: string;
  href: string;
}

export interface ProposicoesResponse {
  dados: ProposicaoSimples[];
  links: Links[];
}

export interface StatusProposicao {
  dataHora: string;
  regime: string;
  descricaoTramitacao: string;
  descricaoSituacao: string;
  despacho: string;
  ambito: string;
  apreciacao: string;
}

export interface ProposicaoCompleta {
  id: number;
  siglaTipo: string;
  numero: number;
  ano: number;
  ementa: string;
  dataApresentacao: string;
  descricaoTipo: string;
  statusProposicao: StatusProposicao;
  ementaDetalhada: string;
  texto: string | null;
  justificativa: string | null;
}


export interface ProposicaoResponse {
  dados: ProposicaoCompleta;
}

//Axios Requests:---------------------------------------------------------------

export const getAllProposicoes = async (pagina: number, itens: number): Promise<ProposicoesResponse> =>
  comoVotouApi.get<ProposicoesResponse>(`proposicoes?pagina=${pagina}&itens=${itens}`).then((res) => res.data);

export const getProposicaoById = async (id: number): Promise<ProposicaoResponse> =>
  comoVotouApi.get<ProposicaoResponse>(`proposicoes/${id}`).then((res) => res.data);


//Querys Keys:------------------------------------------------------------------
export const getAllProposicoesQueryKey = (pagina: number, itens: number): QueryKey => ['/proposicoes', pagina, itens];

export const getProposicaoByIdQueryKey = (id: number): QueryKey => ['/proposicoes', id];


//Querys:-----------------------------------------------------------------------
export const useGetAllProposicoes = (pagina: number, itens = 12): UseQueryResult<ProposicoesResponse> =>
  useQuery<ProposicoesResponse>({
    queryKey: getAllProposicoesQueryKey(pagina, itens),
    queryFn: () => getAllProposicoes(pagina, itens),
    placeholderData: (prev) => prev
  });

export const useGetProposicaoById = (id: number): UseQueryResult<ProposicaoResponse> =>
  useQuery<ProposicaoResponse>({
    queryKey: getProposicaoByIdQueryKey(id),
    queryFn: () => getProposicaoById(id),
    enabled: !!id
  });





