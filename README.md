# Palharia - Controle de Estoque com CRUD
## O projeto Palharia é uma aplicação de controle de estoque, desenvolvida com o objetivo de aprender mais sobre APIs. Ele permite realizar operações básicas de CRUD (Create, Read, Update, Delete) para controle de entrada, saída e produtos no estoque.
###### Tecnologias usadas

<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black"/>

<img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black">

<img src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white"/>


## Instalação

Para instalar o projeto, certifique-se de ter o Node.js, Firebase, Express e Postman instalados. Clone o repositório do GitHub e siga as instruções abaixo:

# Clonar o repositório
git clone https://github.com/seu-usuario/palharia.git

# Acessar o diretório do projeto
cd palharia

# Instalar as dependências
npm install

## Documentação da API

### Endpoints Principais

#### Entradas

1. **POST /entradas/:id**
   - Cria uma nova entrada no estoque.
   - Endpoint para criar uma entrada específica associada a um ID.

2. **GET /entradas**
   - Retorna todas as entradas no estoque.
   - Endpoint para obter a lista completa de entradas.

3. **GET /entradas/:id**
   - Retorna uma entrada específica com base no ID.
   - Endpoint para obter detalhes de uma entrada específica.

4. **PUT /entradas/:id**
   - Atualiza uma entrada específica no estoque.
   - Endpoint para atualizar informações de uma entrada.

5. **DELETE /entradas/:id**
   - Deleta uma entrada específica do estoque.
   - Endpoint para remover uma entrada.

#### Produtos

1. **POST /produtos**
   - Cria um novo produto no estoque.
   - Endpoint para adicionar um novo produto.

2. **GET /produtos**
   - Retorna todos os produtos no estoque.
   - Endpoint para obter a lista completa de produtos.

3. **GET /produtos/:id**
   - Retorna um produto específico com base no ID.
   - Endpoint para obter detalhes de um produto específico.

4. **PUT /produtos/:id**
   - Atualiza um produto específico no estoque.
   - Endpoint para atualizar informações de um produto.

5. **DELETE /produtos/:id**
   - Deleta um produto específico do estoque.
   - Endpoint para remover um produto.

#### Saídas

1. **POST /saidas/:id**
   - Cria uma nova saída do estoque.
   - Endpoint para criar uma saída associada a um ID específico.

2. **GET /saidas**
   - Retorna todas as saídas do estoque.
   - Endpoint para obter a lista completa de saídas.

3. **GET /saidas/:id**
   - Retorna uma saída específica com base no ID.
   - Endpoint para obter detalhes de uma saída específica.

4. **PUT /saidas/:id**
   - Atualiza uma saída específica no estoque.
   - Endpoint para atualizar informações de uma saída.

5. **DELETE /saidas/:id**
   - Deleta uma saída específica do estoque.
   - Endpoint para remover uma saída.

### Contato
Para obter suporte ou fazer perguntas, entre em contato através do [augusto.persuhn@gmail.com].
