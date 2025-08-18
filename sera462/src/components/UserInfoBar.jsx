import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

const UserInfoBar = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20 dark:from-primary/20 dark:to-secondary/20 dark:border-primary/30">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Escola:
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium">
                {user.tenant_name}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Tipo:
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium">
                {user.role}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Usuário:
              </span>
              <span className="text-sm text-gray-900 dark:text-white font-medium">
                {user.username}
              </span>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            title="Sair"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoBar; 