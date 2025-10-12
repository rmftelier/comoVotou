export interface Votacao {
  id: string;
  data: string;
  descricao: string;
  uri: string;
}

export interface Voto {
  idDeputado: number;
  deputado_: {
    id: number;
    nome: string;
    siglaPartido: string;
    siglaUf: string;
  };
  voto: string;
}