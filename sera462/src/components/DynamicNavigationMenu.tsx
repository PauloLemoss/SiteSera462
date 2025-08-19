import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  UserCircleIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  AcademicCapIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { getMenuForRole, isValidRole, MenuItem } from '../config/menuConfig';

interface DynamicNavigationMenuProps {
  userRole: string;
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'dropdown';
  showIcons?: boolean;
  showDescriptions?: boolean;
}

interface IconMap {
  [key: string]: React.ComponentType<any>;
}

const iconMap: IconMap = {
  UserCircleIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  AcademicCapIcon,
};

const DynamicNavigationMenu: React.FC<DynamicNavigationMenuProps> = ({
  userRole,
  className = '',
  variant = 'horizontal',
  showIcons = true,
  showDescriptions = false
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const items = getMenuForRole(userRole);
    setMenuItems(items);
  }, [userRole]);

  const isActive = (path: string) => location.pathname === path;

  const renderIcon = (iconName?: string) => {
    if (!iconName || !showIcons) return null;
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    const baseClasses = "flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg";
    const activeClasses = isActive(item.path)
      ? "bg-primary/10 text-primary dark:bg-primary/20"
      : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700";

    return (
      <li key={index}>
        <Link
          to={item.path}
          className={`${baseClasses} ${activeClasses}`}
          onClick={() => setIsDropdownOpen(false)}
          title={showDescriptions ? item.description : undefined}
        >
          {renderIcon(item.icon)}
          <span className={showIcons ? "ml-2" : ""}>
            {item.name}
          </span>
        </Link>
        {showDescriptions && item.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 ml-7 mt-1">
            {item.description}
          </p>
        )}
      </li>
    );
  };

  // If role doesn't exist, show no access message
  if (!isValidRole(userRole)) {
    return (
      <div className={`text-center py-4 ${className}`}>
        <p className="text-gray-500 dark:text-gray-400">
          Sem acesso - Role não reconhecido: {userRole}
        </p>
      </div>
    );
  }

  // If no menu items, show empty state
  if (menuItems.length === 0) {
    return (
      <div className={`text-center py-4 ${className}`}>
        <p className="text-gray-500 dark:text-gray-400">
          Nenhum item de menu disponível para este perfil
        </p>
      </div>
    );
  }

  // Horizontal variant
  if (variant === 'horizontal') {
    return (
      <nav className={`flex space-x-1 ${className}`}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
              isActive(item.path)
                ? "bg-primary/10 text-primary dark:bg-primary/20"
                : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            title={showDescriptions ? item.description : undefined}
          >
            {renderIcon(item.icon)}
            <span className={showIcons ? "ml-2" : ""}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    );
  }

  // Dropdown variant
  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg"
        >
          <span>Menu</span>
          {isDropdownOpen ? (
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          )}
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <ul className="py-1">
              {menuItems.map((item, index) => renderMenuItem(item, index))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Vertical variant (default)
  return (
    <nav className={className}>
      <ul className="space-y-1">
        {menuItems.map((item, index) => renderMenuItem(item, index))}
      </ul>
    </nav>
  );
};

export default DynamicNavigationMenu;
