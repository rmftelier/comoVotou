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

