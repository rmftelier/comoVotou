

export interface Proposicao {
  id: number;
  uri: string;
  siglaTipo: string;
  codTipo: number;
  numero: number;
  ano: number;
  ementa: string;
}

export interface Links {
  rel: string;
  href: string;
}

export interface ProposicoesResponse {
  dados: Proposicao[];
  links: Links[];
}

export interface StatusProposicao {
  dataHora: string;
  sequencia: number;
  siglaOrgao: string;
  uriOrgao: string;
  uriUltimoRelator: string;
  regime: string;
  descricaoTramitacao: string;
  codTipoTramitacao: string;
  descricaoSituacao: string;
  codSituacao: number;
  despacho: string;
  url: string | null;
  ambito: string;
  apreciacao: string;
}

export interface ProposicaoCompleta {
  id: number;
  uri: string;
  siglaTipo: string;
  codTipo: number;
  numero: number;
  ano: number;
  ementa: string;
  dataApresentacao: string;
  uriOrgaoNumerador: string;
  statusProposicao: StatusProposicao;
  uriAutores: string;
  descricaoTipo: string;
  ementaDetalhada: string;
  keywords: string;
  uriPropPrincipal: string | null;
  uriPropAnterior: string | null;
  uriPropPosterior: string | null;
  urlInteiroTeor: string;
  urnFinal: string | null;
  texto: string | null;
  justificativa: string | null;
}


export interface ProposicaoResponse {
  dados: Proposicao[];
  links: Links[];
}