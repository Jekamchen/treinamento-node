# Treinamento NodeJS

# Introdução

## Curiosidades

## Preparação do Ambiente

## Configuração do Editor Visual Studio Code

## Modulos nativos do NodeJS

## Express.js

## File System

## Um pouco sobre Typescript

# Criando o Projeto

## Estrutura de pastas

## Primeira Execução da aplicação

## Customizando o Tratamento de Erros da Aplicação

# Configurando conexão com banco de dados

## O Básico do TypeORM

## SQLite

## Configurando Migrations

# Módulo de Produtos

## Migration da Tabela products

## Extensão do VS Code para acessar o BD Postgres (além de outros...)

## Conceito de Entidades do TypeORM

## Entidade de Produtos

## Conceito de Repositórios do TypeORM

## Repositório de Produtos

## Visão geral: Tratamentos das Requisições na nossa API

## Serviço para Criação de Produto

## Serviço para Listar Produtos

## Serviço para Exibir um Produto

## Serviço para Atualizar um Produto

## Serviço para Excluir um Produto

## Controller de Produtos

## Rotas de Produtos

## Validação dos Dados de Requisições

# Módulo Usuários e Autenticação

## Migration da Tabela users

## Entidade de Usuários

## Repositório de Usuários

## Serviço para Criação de Usuário

## Serviço para Listar Usuários

## Controller de Usuários

## Rotas de Usuários

## Criptografia em Senhas de Usuários

## Serviço para Criação de Sessão de Autenticação

## Controller de Sessão de Autenticação

## Rota de Sessão de Autenticação

## Conceito Básico de Autenticação por Token JWT

## Sessão de Autenticação com Token JWT

## Middleware de Autenticação para Proteção das Rotas

## Sobrescrita do Objeto Request do Express

## Configuração da Lib para Uploads - Multer

## Serviço para Atualização de Avatar de Usuário

## Controller de Avatar de Usuário

## Rota de Upload de Avatar de Usuário

## Rota Estática para as Imagens de Avatar

# Gerenciamento de Senhas

## Visão geral - Gerenciamento de Senhas

## Migração da Tabela user_tokens

## Entidade de Tokens de Usuários

## Repositório de Tokens de Usuários

## Serviço de Envio de Email para Recuperação de Senha

## Serviço para Redefinição de Senha

## Controller de Tokens de Usuários - Forgot Password

## Rota de Envio de Email - Forgot Password

## Controller de Redefinição de Senha

## Rota de Redefinição de Senha

## Ethereal Fake Email Service

## Template Handlebars para Email (parse) - Parte 1

## Template Handlebars para Email (parse) - Parte 2

## Template Engine Handlebars (html)

## Mail File Template com Handlebars

## Conclusão: Envio de Email para Recuperação de Senha

# Perfis de Usuários

## Serviço para Exibir Perfil de um Usuário

## Serviço para Atualizar Perfil de um Usuário

## Controller de Perfil de Usuário

## Rotas de Perfil de Usuário

# Modulo de Clientes

## Migração da Tabela customers

## Entidade de Clientes

## Repositório de Clientes

## Serviços de Clientes

## Controller de Clientes

## Rotas de Clientes

# Relacionamentos com TypeORM

# Módulo Pedidos

## Migração da Tabela orders

## Migração da Tabela orders_products

## Entidade de Pedidos de Compras

## Entidade de Produtos em um Pedido de Compras

## Repositório de Pedidos de Compras

## Serviço para Criar Pedidos de Compras

## Serviço para Exibir um Pedido de Compra

## Controller de Pedidos de Compras

## Rotas de Pedidos de Compras

# Refatoração

## Paginação de Dados com a Lib TypeORM Pagination

## Variáveis de Ambiente

## Conhecendo a Lib Class Transformer

# Cache com Redis

## Conceitos e configuração inicial do Redis

## Implementando a Classe RedisCache - parte 1

## Implementando a Classe RedisCache - parte 2

## Finalizando a Classe RedisCache e Configurando a Lista de Produtos

## Invalidando o Cache

# Finlizando Aplicação

## Middleware Rate Limiter

# Deploy em produção

## AWS

## Heroku/Vercel/Zeet

# Design Patterns

## Conceito Básico de Domain Driven Design - DDD

## Conceitos Básicos dos Princípios SOLID

## Estruturando a Camada de Infra

## Camada de Domínio - Model Customer

## Camada de Domínio - Customers Repository

## Camada de Infra - Refactoring TypeORM Repositories

## Inversão de Dependência (Refatoração)

## Injeção de Dependência (Refatoração)

## Verificação do Funcionamento da API Após o Processo de Refatoração

# Testes Automatizados

## Conceitos Básicos de Testes Automatizados

## Test Driven Development (TDD) e Jest Framework

## Criando o Primeiro Teste com Jest

## Agrupando os Testes com o Jest

## Criando um Repositório Fake para Testar o Serviço CreateCustomerService

## Testando o Serviço CreateCustomerService - Parte 1

## Configurando o Relatório de Cobertura dos Testes

## Testando o Serviço CreateCustomerService - Final

## Refatorando os Testes do Serviço CreateCustomerService

## Criando Providers para Hash de Senha

## Refatorando o Serviço CreateUserService

## Refatorando o Serviço CreateSessionsService e Criando o FakeHashProvider

## Testando o Serviço CreateUserService

## Testando o Serviço CreateSessionsService


