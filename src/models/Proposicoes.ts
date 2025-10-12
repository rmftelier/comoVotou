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