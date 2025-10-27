<p align="center">
  <img src="https://img.shields.io/badge/🚧%20em%20desenvolvimento-orange?style=for-the-badge" alt="Status do Projeto" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Deploy-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway" />
</p>


<h1 align="center"> 🤔 Como Votou? </h1>


**Como Votou?** é uma plataforma web desenvolvida para facilitar a fiscalização dos representantes políticos no Congresso Nacional.

O sistema utiliza a API [Dados Abertos da Câmara dos Deputados](https://dadosabertos.camara.leg.br/swagger/api.html) para reunir informações sobre as proposições feitas, suas votações e o detalhamento do voto de cada deputado nelas, além de oferecer um glossário de termos legislativos — tornando o acompanhamento político mais acessível e promovendo a participação social no processo democrático.


### 📑 Sumário

- [Instalação e Execução](#instalação-e-execução)
- [Documentação da API](#documentação-da-api)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

## Instalação e Execução

1. Clone o repositório:

   ```bash
    git clone https://github.com/rmftelier/comoVotou
   ```

2. Acesse a pasta do projeto:

   ```bash
    cd comoVotou
   ```

3. Instale as dependências:

    ```bash
     npm install
    ```

4. No arquivo `.env.example` na raiz do projeto, modifique-o com as variável necessária:

    ```env
     MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<appname>
    ```
    
5. Execute em modo desenvolvimento:
    ```bash
     npm run dev
    ```
    
> [!TIP]
> Para testar as rotas utilize ferramentas como: ThunderClient/Postman e faça as requisições que desejar para testar os endpoints da API.


## Documentação da API 

A API possui os seguintes endpoints: 

<h3> 1. Proposições </h3>

`GET /proposicoes`

Retorna todas as proposições cadastradas.

- **Método**: GET
- **Query Params (Opcionais)**: `pagina`, `itens` 
- **Resposta de Sucesso (200 OK)**:
  ```bash
   {
     "dados": [
        {
            "id": 104402,
            "siglaTipo": "PRC",
            "numero": 4,
            "ano": 2003,
            "ementa": "Cria o Grupo Parlamentar do Turismo."
        },
        {
            "id": 104404,
            "siglaTipo": "PL",
            "numero": 35,
            "ano": 2003,
            "ementa": "Adiciona parágrafo ao art. 6º da Lei nº 9.870, de 23 de novembro de 1999."
        }
     ],
      "links": [
           {
               "rel": "self",
               "href": "https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=1&itens=15"
           },
           {
               "rel": "next",
               "href": "https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=2&itens=15"
           },
           {
               "rel": "first",
               "href": "https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=1&itens=15"
           },
           {
               "rel": "last",
               "href": "https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=3110&itens=15"
           }
       ]
   }
  ```

`GET /proposicoes/:id`

Retorna uma proposição específica pelo seu id.

- **Método**: GET
- **Parâmetros da Rota**: `id`: `string`
- **Resposta de Sucesso (200 OK)**:
  ```bash
   {
       "dados": {
           "id": 2500080,
           "siglaTipo": "PEC",
           "numero": 18,
           "ano": 2025,
           "ementa": "Altera os art. 21, art. 22, art. 23, art. 24 e art. 144 da Constituição, para dispor sobre competências da União, dos Estados, do Distrito Federal e dos Municípios relativas à segurança pública.",
           "dataApresentacao": "2025-04-24T08:51",
           "descricaoTipo": "Proposta de Emenda à Constituição",
           "statusProposicao": {
               "dataHora": "2025-10-16T15:09",
               "regime": "Especial (Art. 202 c/c 191, I, RICD)",
               "descricaoTramitacao": "Apresentação de Requerimento",
               "descricaoSituacao": "Aguardando Parecer",
               "despacho": "Apresentação do REQ n. 82/2025 (Requerimento de Audiência Pública), pelo Deputado Jorge Solla (PT/BA -Fdr PT-PCdoB-PV), que \"Requer seja convidado o Secretário Nacional de Justiça, Jean Keiji Uema, para apresentar e debater com os membros desta Comissão Especial os objetivos da PEC 18/2025\".",
               "ambito": "Regimental",
               "apreciacao": "Proposição Sujeita à Apreciação do Plenário"
           },
           "ementaDetalhada": "",
           "texto": null,
           "justificativa": null
       }
   }

  ```

`GET /proposicoes/:id/votacoes`

Retorna as votações vinculadas à proposição cujo ID é passado como parâmetro.

- **Método**: GET
- **Parâmetros da Rota**: `id`: `string`
- **Resposta de Sucesso (200 OK)**:
  ```bash
   {
       "dados": [
           {
               "id": "2500080-166",
               "data": "2025-09-23",
               "descricao": "Aprovado o requerimento nº 48/2025,da Sra. Alice Portugal que requer a participação de representação nacional dos policiais rodoviários federais e dos policiais ferroviários federais no Seminário Regional de Salvador (BA) destinado a debater a PEC nº 18/2025.",
               "aprovacao": 1
           },
           {
               "id": "2500080-137",
               "data": "2025-09-16",
               "descricao": "Aprovado o requerimento nº 21/2025,do Sr. Alberto Fraga que apresenta nomes de entidades políticas nacionais para serem ouvidas em audiência pública: Conselho Nacional de Secretários de Segurança Pública (CONSESP); Frente Nacional de Prefeitas e Prefeitos (FNP);  Confederação Nacional de Municípios (CNM);  União Nacional dos Legisladores e Legislativos Estaduais (Unale); e União dos Vereadores do Brasil (UVB).",
               "aprovacao": 1
           }
       ]
   }
  ```

<h3> 2. Votações </h3>

`GET /votacoes/:id/votos`

Retorna as votações vinculadas à proposição cujo ID foi passado como parâmetro.

- **Método**: GET
- **Parâmetros da Rota**: `id`: `string`
- **Resposta de Sucesso (200 OK)**:
  ```bash
   {
       "dados": [
           {
               "tipoVoto": "Não",
               "dataRegistroVoto": "2025-07-09T12:55:24",
               "deputado_": {
                   "id": 73486,
                   "nome": "Pompeo de Mattos",
                   "siglaPartido": "PDT",
                   "siglaUf": "RS",
                   "urlFoto": "https://www.camara.leg.br/internet/deputado/bandep/73486.jpg"
               }
           },
       ]
   }
  ```

<h3> 3. Glossário </h3>

`GET /glossario`

Retorna todos os termos legislativos cadastrados no banco de dados. 

- **Método**: GET
- **Resposta de Sucesso (200 OK)**:
  ```bash
   [
     {
        "id": "68e6d1d67b3eaf3ce667a23c",
        "sigla": "PRC",
        "termo": "Projeto de Resolução da Câmara dos Deputados",
        "descricao": "Proposição destinada a elaboração de Resolução da Câmara dos Deputados.",
        "url": "https://www.congressonacional.leg.br/legislacao-e-publicacoes/glossario-legislativo/-/legislativo/termo/projeto_de_resolucao_da_camara_dos_deputados_prc"
     }
   ]
  ```

## Tecnologias Utilizadas 

- **Linguagem e ambiente**: Node.js, TypeScript
- **Framework**: Express
- **Banco de dados**: MongoDB
- **Integrações**: Axios / Mongoose
- **Deploy**: Railway

---

<div align="center"> 
  <p> 💌 Desenvolvido por Roberta Meyrelles</p>
  <a href = "mailto:bertameyrelles@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/roberta-meyrelles" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="https://github.com/rmftelier" target="_blank"><img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"></a>
</div>
