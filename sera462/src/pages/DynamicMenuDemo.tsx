import React, { useState } from 'react';
import DynamicNavigationMenu from '../components/DynamicNavigationMenu';
import { useUserRole } from '../hooks/useUserRole';

const DynamicMenuDemo: React.FC = () => {
  const { role, isValid, displayName } = useUserRole();
  const [selectedVariant, setSelectedVariant] = useState<'horizontal' | 'vertical' | 'dropdown'>('horizontal');
  const [showIcons, setShowIcons] = useState(true);
  const [showDescriptions, setShowDescriptions] = useState(false);

  const variants = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'dropdown', label: 'Dropdown' }
  ] as const;

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-white mb-6">
              Dynamic Navigation Menu Demo
            </h1>

            {/* User Role Information */}
            <div className="mb-8 p-4 bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold text-white mb-2">
                Informações do Usuário
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-300">Role:</span>
                  <span className="ml-2 text-white">{role || 'N/A'}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Display Name:</span>
                  <span className="ml-2 text-white">{displayName}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Valid Role:</span>
                  <span className={`ml-2 ${isValid ? 'text-green-400' : 'text-red-400'}`}>
                    {isValid ? 'Sim' : 'Não'}
                  </span>
                </div>
              </div>
            </div>

            {/* Configuration Controls */}
            <div className="mb-8 p-4 bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold text-white mb-4">
                Configurações
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Variante
                  </label>
                                      <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value as any)}
                      className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                    {variants.map((variant) => (
                      <option key={variant.value} value={variant.value}>
                        {variant.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mostrar Ícones
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showIcons}
                      onChange={(e) => setShowIcons(e.target.checked)}
                      className="rounded border-gray-600 text-primary focus:ring-primary bg-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">Ativado</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mostrar Descrições
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showDescriptions}
                      onChange={(e) => setShowDescriptions(e.target.checked)}
                      className="rounded border-gray-600 text-primary focus:ring-primary bg-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">Ativado</span>
                  </label>
                </div>

                                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Role de Teste
                  </label>
                  <select
                    value={role}
                    onChange={(e) => {
                      // This would normally update the user role in the context
                      console.log('Role changed to:', e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                     <option value="Estudante">Estudante</option>
                     <option value="Professor">Professor</option>
                     <option value="Admin">Admin</option>
                     <option value="Invalid">Invalid Role</option>
                   </select>
                </div>
              </div>
            </div>

            {/* Menu Preview */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">
                Preview do Menu
              </h2>
              <div className="p-4 bg-gray-700 rounded-lg">
                <DynamicNavigationMenu
                  userRole={role}
                  variant={selectedVariant}
                  showIcons={showIcons}
                  showDescriptions={showDescriptions}
                  className="w-full"
                />
              </div>
            </div>

            {/* All Variants Preview */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Todas as Variantes
              </h2>
              <div className="space-y-6">
                {variants.map((variant) => (
                  <div key={variant.value} className="p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-md font-medium text-white mb-3">
                      {variant.label}
                    </h3>
                    <DynamicNavigationMenu
                      userRole={role}
                      variant={variant.value}
                      showIcons={showIcons}
                      showDescriptions={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicMenuDemo;
