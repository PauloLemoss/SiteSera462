import React, { useState } from 'react';
import DynamicNavigationMenu from './DynamicNavigationMenu';

const RoleBasedMenuExample: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<string>('Estudante');

  const roles = [
    { value: 'Estudante', label: 'Estudante' },
    { value: 'Professor', label: 'Professor' },
    { value: 'Admin', label: 'Administrador' },
    { value: 'Invalid', label: 'Role Inválido' }
  ];

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">
        Menu Dinâmico Baseado em Perfil
      </h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Selecione o Perfil:
        </label>
        <select
          value={currentRole}
          onChange={(e) => setCurrentRole(e.target.value)}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {roles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Menu Horizontal
          </h3>
          <div className="p-4 bg-gray-700 rounded-lg">
            <DynamicNavigationMenu
              userRole={currentRole}
              variant="horizontal"
              showIcons={true}
              showDescriptions={false}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Menu Vertical
          </h3>
          <div className="p-4 bg-gray-700 rounded-lg">
            <DynamicNavigationMenu
              userRole={currentRole}
              variant="vertical"
              showIcons={true}
              showDescriptions={true}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Menu Dropdown
          </h3>
          <div className="p-4 bg-gray-700 rounded-lg">
            <DynamicNavigationMenu
              userRole={currentRole}
              variant="dropdown"
              showIcons={true}
              showDescriptions={false}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-100 mb-2">
          Como Funciona:
        </h4>
        <ul className="text-sm text-blue-200 space-y-1">
          <li>• <strong>Estudante:</strong> Perfil, Questionários, Pontuação, Avisos</li>
          <li>• <strong>Professor:</strong> Dashboard, Questionários, Alunos</li>
          <li>• <strong>Admin:</strong> Todos os menus disponíveis</li>
          <li>• <strong>Role Inválido:</strong> Mostra mensagem de "sem acesso"</li>
        </ul>
      </div>
    </div>
  );
};

export default RoleBasedMenuExample;
