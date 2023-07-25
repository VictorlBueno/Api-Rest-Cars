# API REST
<p>Aplicação que contém 3 endpoint, consumindo 2 endpoint de uma API REST externa.</p>
<p>Desenvolvi o projeto seguindo os princípios SOLID, que promovem a criação de código mais modular, flexível e de fácil manutenção, buscando separar responsabilidades e tornar o sistema mais escalável.</p>

### Índice
* [Como iniciar a aplicação](#Como-iniciar-a-aplicação)
* [Requisições](#Requisições)
* [Tecnologias utilizadas](#Tecnologias-utilizadas)
  * [Nodemon](#Nodemon)
  * [Express](#Express)
  * [ESLint](#ESLint)
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
#### Nodemon
O Nodemon é uma ferramenta que atualiza automaticamente o servidor Node.js a cada modificação no código-fonte, agilizando o desenvolvimento.

#### Express
O Express é uma framework leve que oferece uma camada fina de recursos fundamentais para o desenvolvimento de aplicativos web, sem comprometer ou ocultar as funcionalidades do Node.js.

#### ESLint
O ESLint é uma ferramenta para padronizar o código JavaScript, definindo regras como aspas e ponto e vírgula. Ele ajuda a manter a consistência e identificar problemas no código.
