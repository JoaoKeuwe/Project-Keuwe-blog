<p align="center">
 <img src="/public/logoBtix.webp" alt="collection" width="150px" height="150px"/>
</p>
<br>

## Sobre o Projeto

O projeto BtixBlog, é um blog onde se pode realizar a leitura de blogs(posts) e também os comentários associados à ele. O projeto foi desenvolvido em cerca de 5 dias.<br>

## O que foi passado no desafio:

A equipe recebeu uma demanda para desenvolver um front-end para uma API RESTful. No cenário proposto, a interface deve exibir posts de um blog e, ao clicar em um post, os comentários associados. 

Você ficou responsável pela demanda e sua tarefa é projetar uma interface para atender as necessidades. 

Com isso foram enviadas 4 API´s para que fossem consumidas no front-end da aplicação.

<br><br>


## Tecnologias utilizadas

- [ReactJs](https://pt-br.reactjs.org/)
- [CSS- Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Google fonts | Icons](https://fonts.google.com/)

<br>

## Desenvolvimento

Aplicação foi desenvolvida de acordo com os critérios fornecidos para o teste.

Não foi estabelecido um design para a aplicação, logo, o desenvolvedor estava livre para utilizar a criatividade.

A aplicação foi desenvolvida utilizando o conceito de mobile first, logo a mesma está responsiva.

Na página de posts, foi adicionado a funcionalidade de páginação ( a api retorna uma lista de 100 posts),logo, houve uma tratativa para o não carregamento de todas os posts de uma única vez na interface da aplicação.

Ainda na página de posts, ao realizar um hover em cima do autor do post, será possível visualizar um card de informações sobre o autor.

Ao abrir um post específico, serão exibidos os comentários relacionados a aquele post e houve uma tratativa para o redirecionamento de página, caso o usuário tente acessar um post inexistente.

Foram desenvolvidos testes unitários.<br><br>

## Guia de instalação do projeto para a sua máquina !

```bash
 # Clonar o repositório
 $ git clone git@github.com:JoaoKeuwe/Project-Test-Btix-blog.git

 # Entrar no diretório(pasta) da aplicação
 $ cd btix-blog

 # Instalar todas as dependencias de desenvolvimento do projeto (necessita ter o Node(npm) instalado)
 $ npm install

 # Comando para executar o projeto
 $ npm start
 
 # Caso não abra direto em seu navegador digitar no campo de busca 
 $ http://localhost:3000/
 
 # Comando caso queira executar os testes
 $ npm run test
```
<br>

## Deploy do projeto
[Btix-Blog](https://blogbtix.netlify.app/)