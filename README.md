<h1 align="center"> 🤔 Como Votou? </h1>

**Como Votou?** é uma plataforma web desenvolvida para facilitar a fiscalização dos representantes políticos no Congresso Nacional.
O sistema reúne informações sobre proposições votadas, detalha o voto de cada deputado e oferece um glossário de termos legislativos — tornando o acompanhamento político mais acessível e promovendo a participação social no processo democrático.

<h2> Instalação e Execução </h2>

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
> Para testar as rotas utilize ferramentas como: ThunderClient ou Postman e faça as requisições que desejar para testar os endpoints da API.

<h2> Documentação da API</h2>

A API possui os seguintes endpoints: 

<h3> 1. Proposições </h3>

> [!NOTE]
> As informações das Proposições são consumidas da API Dados Abertos da Câmara dos Deputados.

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
            "uri": "https://dadosabertos.camara.leg.br/api/v2/proposicoes/104402",
            "siglaTipo": "PRC",
            "codTipo": 141,
            "numero": 4,
            "ano": 2003,
            "ementa": "Cria o Grupo Parlamentar do Turismo."
        },
        {
            "id": 104404,
            "uri": "https://dadosabertos.camara.leg.br/api/v2/proposicoes/104404",
            "siglaTipo": "PL",
            "codTipo": 139,
            "numero": 35,
            "ano": 2003,
            "ementa": "Adiciona parágrafo ao art. 6º da Lei nº 9.870, de 23 de novembro de 1999."
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
     "dados": [
           ...
     ],
     "links":[
           ...
     ],
    "votacoes": [
           ...
    ]
  ```

<h3> 2. Glossário </h3>

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
        "descricao": "Proposição destinada a elaboração de Resolução da Câmara dos Deputados."
     }
   ]
  ```

---

<div align="center"> 
  <p> 💌 Desenvolvido por Roberta Meyrelles</p>
  <a href = "mailto:bertameyrelles@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/roberta-meyrelles" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="https://github.com/rmftelier" target="_blank"><img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"></a>
</div>
