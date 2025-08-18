# Dashboard de Desempenho - Sera462

## Visão Geral

O Dashboard de Desempenho é uma nova funcionalidade adicionada ao sistema Sera462 que permite visualizar e analisar dados de desempenho dos alunos, turmas e materiais através de gráficos interativos.

## Funcionalidades

### 📊 Gráficos Interativos
- **Gráfico de Barras**: Mostra o número de questões respondidas por alunos, turmas ou materiais
- **Gráfico de Pizza**: Exibe a distribuição percentual dos dados selecionados

### 📈 Cards de Estatísticas
- Total de questões respondidas
- Número de alunos ativos
- Quantidade de turmas
- Número de materiais disponíveis

### 🔍 Filtros Dinâmicos
- **Filtrar por**: Alunos, Turmas ou Materiais
- **Período**: Última semana, mês, trimestre ou ano

### 📋 Tabela de Resumo
- Lista detalhada com taxa de acerto e status de desempenho
- Indicadores visuais de status (Excelente, Bom, Precisa Melhorar)

## Como Acessar

1. Faça login no sistema
2. No menu de navegação, clique em "Administração"
3. Selecione "Dashboard" na lista de opções
4. Ou acesse diretamente: `/dashboard`

## Tecnologias Utilizadas

- **React**: Framework principal
- **Chart.js**: Biblioteca para criação de gráficos
- **react-chartjs-2**: Wrapper React para Chart.js
- **Tailwind CSS**: Estilização
- **Heroicons**: Ícones

## Dados de Demonstração

O dashboard utiliza dados fictícios para fins de apresentação:

### Alunos
- João Silva, Maria Santos, Pedro Costa, Ana Oliveira, Lucas Ferreira, Julia Lima

### Turmas
- Matemática 9ºA, Português 9ºA, História 9ºA, Ciências 9ºA, Geografia 9ºA

### Materiais
- Álgebra, Gramática, História do Brasil, Biologia, Geografia Física

## Estrutura do Código

```
src/
├── pages/
│   └── Dashboard.jsx          # Componente principal do dashboard
├── components/
│   └── Layout.jsx            # Menu de navegação atualizado
└── pages/
    └── routes.jsx            # Rotas atualizadas
```

## Personalização

Para personalizar o dashboard com dados reais:

1. Substitua o objeto `dummyData` no arquivo `Dashboard.jsx`
2. Conecte com sua API de backend
3. Implemente chamadas assíncronas para buscar dados em tempo real
4. Adicione filtros adicionais conforme necessário

## Responsividade

O dashboard é totalmente responsivo e funciona em:
- Desktop (2 colunas de gráficos)
- Tablet (1 coluna de gráficos)
- Mobile (layout otimizado para telas pequenas)

## Tema Escuro

O dashboard suporta automaticamente o tema escuro, adaptando cores e contrastes conforme a preferência do usuário.
