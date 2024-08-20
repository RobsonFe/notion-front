# Notion-Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Descrição

Este projeto é uma aplicação web desenvolvida em Angular, que permite criar e gerenciar tarefas integrada a uma API em NestJS que a mesma possui uma integração com a API do Notion.

Todas as tarefas são gerenciadas de forma reativa entre o Angular, API em NestJS e API do Notion. O objetivo desse projeto é demonstrar um serviço de multi-utilidades, onde o usuário pode utilizar o sistema para realizar diversas tarefas no Notion.

Utilizei como base um gerenciamento de tarefas simples, onde o usuário pode criar, editar e excluir tarefas, mas poderia utilizar qualquer funcionalidade do Notion, desde que integrada de forma correta na aplicação.

## API em NestJS

A API em NestJS foi desenvolvida para gerenciar as tarefas do Notion e tambem salvar essas tarefas tanto no banco de dado mongodb quanto em uma planilha de excel.
<br>
[Documentação da API NestJS com Notion](https://github.com/RobsonFe/api-notion-todo)

## Instalação e Execução

Baixe o projeto e instale as dependências com o comando:

```bash
npm install
```

Após a instalação das dependências, execute o projeto com o comando:

```bash
ng serve
```

A aplicação estará disponível em [http://localhost:4200](http://localhost:4200)

## Tecnologias

- Angular 18.1.3
- Tailwind CSS
- Flowbite

## Conceitos

A aplicação utiliza os conceitos de Single-Page-Application, onde a aplicação é carregada toda de uma vez e atualizada dinamicamente sem a necessidade de um carregamento, tudo feito de forma dinâmica e integrada.Foi utilizado no projeto os novos conceitos de `controll-flow` do Angular 17+. Utilizei um modulo para assegurar que um unico modulo distribuia as informações para todos os componentes, e assim evitar a sobrecarga de informações no componente.

---

### Autor: **Robson Ferreira.**
