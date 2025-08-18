# Sera462 - Sistema de Gestão Escolar

Este é um sistema web desenvolvido em React para gestão escolar, permitindo o cadastro e gerenciamento de alunos, professores, turmas e usuários.

## Requisitos do Sistema

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd sera462
```

2. Instale as dependências:
```bash
npm install
```

## Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa a verificação de código

## Estrutura do Projeto

```
sera462/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── assets/        # Recursos estáticos
│   └── App.jsx        # Componente principal
├── public/            # Arquivos públicos
└── package.json       # Dependências e scripts
```

## Funcionalidades

- Cadastro de Usuários
  - Criação de novos usuários com diferentes perfis (Estudante, Professor, Admin)
  - Validação de campos obrigatórios
  - Confirmação de senha

- Cadastro de Tenants
  - Registro de novas instituições
  - Validação de CNPJ
  - Gerenciamento de schemas

- Área de Acesso
  - Login de usuários
  - Controle de acesso baseado em perfis

## Tecnologias Utilizadas

- React 18
- React Router DOM
- Vite
- ESLint
- CSS Modules

## API

A aplicação se comunica com a API em:
```
https://access-control-zpss.onrender.com/api/v1/
```

## Suporte

Para suporte ou dúvidas, entre em contato através do email: [EMAIL_DE_SUPORTE]

## Licença

Este projeto está sob a licença [TIPO_DE_LICENÇA]
