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
  dados: ProposicaoCompleta[];
  links: Links[];
}