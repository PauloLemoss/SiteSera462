# Sistema de Menu Dinâmico Baseado em Perfil

## 📋 Visão Geral

Este sistema implementa um menu de navegação dinâmico que se adapta automaticamente ao perfil do usuário (Estudante, Professor, Administrador) baseado na autenticação JWT.

## 🎯 Funcionalidades

### ✅ **Perfis Suportados:**

- **🔹 Estudante (Roller: "Student")**
  - Perfil
  - Questionários
  - Pontuação
  - Avisos

- **🔹 Professor (Roller: "Teacher")**
  - Dashboard
  - Questionários (CRUD)
  - Alunos (Busca por matrícula)

- **🔹 Administrador (Roller: "Admin")**
  - Acesso a todos os menus dos perfis Estudante e Professor

## 🏗️ Arquitetura do Sistema

### 📁 Estrutura de Arquivos:

```
src/
├── config/
│   └── menuConfig.ts          # Configuração JSON dos menus
├── components/
│   ├── DynamicNavigationMenu.tsx  # Componente principal do menu
│   ├── EnhancedLayout.tsx         # Layout com menu integrado
│   └── RoleBasedMenuExample.tsx   # Exemplo de uso
├── hooks/
│   └── useUserRole.ts         # Hook para gerenciar roles
└── pages/
    └── DynamicMenuDemo.tsx    # Página de demonstração
```

## 🔧 Configuração

### 1. **Configuração dos Menus** (`src/config/menuConfig.ts`)

```typescript
export const menuConfig: MenuConfig = {
  Estudante: [
    { name: "Perfil", path: "/profile", icon: "UserCircleIcon" },
    { name: "Questionários", path: "/questionnaires", icon: "DocumentTextIcon" },
    { name: "Pontuação", path: "/score", icon: "ChartBarIcon" },
    { name: "Avisos", path: "/warnings", icon: "ExclamationTriangleIcon" }
  ],
  Professor: [
    { name: "Dashboard", path: "/dashboard", icon: "HomeIcon" },
    { name: "Questionários", path: "/questionnaires", icon: "DocumentTextIcon" },
    { name: "Alunos", path: "/students", icon: "AcademicCapIcon" }
  ],
  Admin: [
    // Todos os menus dos outros perfis
  ]
};
```

### 2. **Mapeamento de Roles** (`src/hooks/useUserRole.ts`)

O sistema mapeia automaticamente os roles do JWT:
- `"Student"` → `"Estudante"`
- `"Teacher"` → `"Professor"`
- `"Admin"` → `"Admin"`

## 🚀 Como Usar

### 1. **Uso Básico do Componente:**

```tsx
import DynamicNavigationMenu from './components/DynamicNavigationMenu';

function MyComponent() {
  return (
    <DynamicNavigationMenu
      userRole="Estudante"
      variant="horizontal"
      showIcons={true}
      showDescriptions={false}
    />
  );
}
```

### 2. **Integração com Autenticação:**

```tsx
import { useUserRole } from './hooks/useUserRole';
import DynamicNavigationMenu from './components/DynamicNavigationMenu';

function AuthenticatedMenu() {
  const { role, isValid } = useUserRole();
  
  if (!isValid) {
    return <div>Sem acesso</div>;
  }
  
  return (
    <DynamicNavigationMenu
      userRole={role}
      variant="vertical"
      showIcons={true}
    />
  );
}
```

## 🎨 Variantes do Menu

### 1. **Horizontal** (`variant="horizontal"`)
- Menu em linha horizontal
- Ideal para headers

### 2. **Vertical** (`variant="vertical"`)
- Menu em lista vertical
- Ideal para sidebars

### 3. **Dropdown** (`variant="dropdown"`)
- Menu dropdown expansível
- Ideal para navegação compacta

## ⚙️ Props do Componente

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `userRole` | `string` | - | Role do usuário (obrigatório) |
| `variant` | `'horizontal' \| 'vertical' \| 'dropdown'` | `'horizontal'` | Estilo do menu |
| `showIcons` | `boolean` | `true` | Mostrar ícones |
| `showDescriptions` | `boolean` | `false` | Mostrar descrições |
| `className` | `string` | `''` | Classes CSS adicionais |

## 🔄 Fluxo de Autenticação

1. **Login** → JWT é validado
2. **Extração do Role** → Campo `Roller` do JWT
3. **Mapeamento** → Role é mapeado para português
4. **Renderização** → Menu é gerado dinamicamente

### Exemplo de Resposta JWT:

```json
{
  "Username": "3010790",
  "user_id": "9aEE3CC7-2E37-4E4E-86DE-3B326848464D",
  "Roller": "Student",
  "First_access": false,
  "token_id": "4d8ab8c1b79981f2fd3b5b6d32f77a6a"
}
```

## 🧪 Testando o Sistema

### 1. **Página de Demo:**
Acesse `/dynamic-menu-demo` para testar todas as variantes

### 2. **Exemplo Simples:**
```tsx
import RoleBasedMenuExample from './components/RoleBasedMenuExample';

// Use o componente de exemplo para testes
<RoleBasedMenuExample />
```

## 🔧 Personalização

### Adicionando Novos Menus:

1. **Edite** `src/config/menuConfig.ts`
2. **Adicione** novos itens ao array do perfil desejado
3. **Configure** ícone e descrição

```typescript
Estudante: [
  // ... menus existentes
  {
    name: "Novo Menu",
    path: "/novo-menu",
    icon: "NewIcon",
    description: "Descrição do novo menu"
  }
]
```

### Adicionando Novos Ícones:

1. **Importe** o ícone do Heroicons
2. **Adicione** ao `iconMap` em `DynamicNavigationMenu.tsx`

```typescript
import { NewIcon } from '@heroicons/react/24/outline';

const iconMap: IconMap = {
  // ... ícones existentes
  NewIcon,
};
```

## 🛡️ Tratamento de Erros

- **Role Inválido**: Mostra mensagem "Sem acesso"
- **Menu Vazio**: Mostra mensagem "Nenhum item disponível"
- **Falta de Autenticação**: Redireciona para login

## 📱 Responsividade

- **Desktop**: Menu horizontal/dropdown
- **Mobile**: Menu vertical em drawer
- **Tablet**: Adaptação automática

## 🎯 Próximos Passos

1. **Implementar** as páginas dos menus
2. **Adicionar** permissões granulares
3. **Criar** breadcrumbs dinâmicos
4. **Implementar** cache de menus

---

## 📞 Suporte

Para dúvidas ou sugestões, consulte a documentação ou entre em contato com a equipe de desenvolvimento.

