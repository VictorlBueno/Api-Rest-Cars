# API REST
<p>Aplicação que contém 3 endpoint, consumindo 2 endpoint de uma API REST externa.</p>
<p>Desenvolvi o projeto seguindo os princípios SOLID, que promovem a criação de código mais modular, flexível e de fácil manutenção, buscando separar responsabilidades e tornar o sistema mais escalável.</p>

### Índice
* [Como iniciar a aplicação](#como-iniciar-a-aplicação)
* [Requisições](#requisições)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
  * [Nodemon](#nodemon)
  * [Express](#express)
  * [ESLint](#eslint)
  * [MongoDB](#mongodb)
  * [Axios](#axios)
<br>

## Como iniciar a aplicação
O projeto poderá ser acessado através do endereço http://localhost:3000/
<ol>
  <li>Crie uma pasta para o projeto no seu computador e navegue até ela no terminal</li>
  <li>Ainda no terminal, importe este projeto utilizando: <code>git clone https://github.com/VictorlBueno/Api-Rest-Cars</code></li>
  <li>Navegue até o projeto clonado com: <code>cd Api-Rest-Cars</code>
  <li>Instale as dependências do projeto com o comando: <code>npm install</code></li>
  <li>Inicie o projeto com o comando: <code>npm run dev</code></li>
</ol>
<br>

## Requisições
| Endereço | Descrição |
| --- | --- |
| `/api/listCars` | Retorna na api implementada os dados da API externa do getpoint (GET api/cars) |
| `/api/createCars` | Cria um registro na API externa (POST api/cars) usando a API implementada |
| `/api/logs` | Consulta todos os registros salvos na tabela log que contém os logs das chamadas efetuadas da api |
<br>

## Tecnologias utilizadas

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

#### Nodemon
<p>Para agilizar o desenvolvimento, empreguei o Nodemon, uma ferramenta que automatiza a atualização do servidor Node.js a cada alteração no código-fonte.</p>

#### Express
<p>Optei por utilizar o Express, um framework leve que proporciona uma camada fina de recursos essenciais para o desenvolvimento de aplicações web. O Express complementa o Node.js, permitindo criar aplicativos web de forma eficiente, mantendo a transparência e o acesso às funcionalidades do Node.js em todo o processo de desenvolvimento.</p>

#### ESLint
<p>Adotei o ESLint para aplicar padrões de formatação ao código JavaScript, incluindo regras para aspas e ponto e vírgula, garantindo uma base consistente. Essa ferramenta também é útil para identificar e corrigir problemas no código, aprimorando a qualidade e a legibilidade do projeto.</p>

#### MongoDB
<p>Utilizei o MongoDB para implementar o armazenamento de logs utilizando uma abordagem NoSQL, o que proporciona maior flexibilidade e escalabilidade ao gerenciar os registros de forma eficiente.</p>

#### Axios
<p>Para consumir uma API externa, optei por utilizar o axios, uma biblioteca JavaScript baseada em Promises, que simplifica as solicitações HTTP.</p>

#
<h6>Links&ensp;&ensp;&ensp;&ensp;
<a href="https://linkedin.com/in/victorlbueno/" target="_blank">LinkedIn</a>&ensp;&ensp;•&ensp;&ensp;
<a href="https://victor.com.de/" target="_blank">Website</a>&ensp;&ensp;•&ensp;&ensp;
<a href="https://instagram.com/victorlbueno" target="_blank">Instagram</a></h6>
