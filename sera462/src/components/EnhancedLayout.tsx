import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  UsersIcon, 
  PhoneIcon, 
  BriefcaseIcon, 
  InformationCircleIcon, 
  UserCircleIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import UserInfoBar from './UserInfoBar';
import DynamicNavigationMenu from './DynamicNavigationMenu';
import { useAuth } from '../contexts/AuthContext';
import { useUserRole } from '../hooks/useUserRole';

const navigation = [
  { name: 'Início', href: '/', icon: HomeIcon },
  { name: 'Quem Somos', href: '/quemsomos', icon: InformationCircleIcon },
  { name: 'Equipe', href: '/equipe', icon: UsersIcon },
  { name: 'Parceiros', href: '/parceiros', icon: BriefcaseIcon },
  { name: 'Contato', href: '/contato', icon: PhoneIcon },
];

const adminNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
  { name: 'Área de Acesso', href: '/areadeacesso', icon: UserCircleIcon },
  { name: 'Cadastro Aluno', href: '/cadastroaluno', icon: AcademicCapIcon },
  { name: 'Cadastro Turma', href: '/turma', icon: UserGroupIcon },
  { name: 'Cadastro Professor', href: '/cadastroprofessor', icon: UsersIcon },
  { name: 'Cadastro Instituição', href: '/tenant', icon: BuildingOfficeIcon },
  { name: 'Cadastro Usuário', href: '/user', icon: UserCircleIcon },
  { name: 'Cadastro Matéria', href: '/mataria', icon: AcademicCapIcon },
  { name: 'Menu Demo', href: '/dynamic-menu-demo', icon: ChartBarIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const EnhancedLayout: React.FC = () => {
  const location = useLocation();
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
  const { role, displayName, isValid } = useUserRole();

  const isActive = (path: string) => location.pathname === path;

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="spinner w-8 h-8"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <Disclosure as="nav" className="bg-gray-800 shadow-soft border-b border-gray-700">
        {({ open }) => (
          <>
            <div className="container-custom">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                  <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-xl font-bold text-white">
                      Sera462
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isActive(item.href)
                          ? 'nav-link-active'
                          : 'nav-link'
                      )}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Role-based Menu for Authenticated Users */}
                  {isAuthenticated && isValid && (
                    <div className="relative">
                      <button
                        onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                        className="nav-link flex items-center"
                      >
                        <UserCircleIcon className="w-4 h-4 mr-2" />
                        {displayName}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                            isRoleMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <Transition
                        show={isRoleMenuOpen}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-medium border border-gray-200 dark:border-gray-700 z-50">
                          <div className="py-1">
                            <DynamicNavigationMenu
                              userRole={role}
                              variant="vertical"
                              showIcons={true}
                              showDescriptions={false}
                              className="w-full"
                            />
                          </div>
                        </div>
                      </Transition>
                    </div>
                  )}

                  {/* Admin Menu Dropdown for Admin Users */}
                  {isAuthenticated && (role === 'Admin' || role === 'Administrator') && (
                    <div className="relative">
                      <button
                        onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                        className="nav-link flex items-center"
                      >
                        <ChartBarIcon className="w-4 h-4 mr-2" />
                        Administração
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                            isAdminMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <Transition
                        show={isAdminMenuOpen}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-medium border border-gray-200 dark:border-gray-700 z-50">
                          <div className="py-1">
                            {adminNavigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  isActive(item.href)
                                    ? 'bg-primary/10 text-primary dark:bg-primary/20'
                                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                                  'flex items-center px-4 py-2 text-sm transition-colors duration-200'
                                )}
                                onClick={() => setIsAdminMenuOpen(false)}
                              >
                                <item.icon className="w-4 h-4 mr-3" />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Transition>
                    </div>
                  )}

                  {/* Login Link for Non-authenticated Users */}
                  {!isAuthenticated && (
                    <Link
                      to="/login"
                      className="nav-link flex items-center"
                    >
                      <UserCircleIcon className="w-4 h-4 mr-2" />
                      Login
                    </Link>
                  )}

                  {/* Theme Toggle */}
                  <div className="ml-4">
                    <ThemeToggle />
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-2">
                  <ThemeToggle />
                  <Disclosure.Button className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-700 transition-colors duration-200">
                    {open ? (
                      <XMarkIcon className="w-6 h-6" />
                    ) : (
                      <Bars3Icon className="w-6 h-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary dark:bg-primary/20'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                      'flex items-center px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200'
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Disclosure.Button>
                ))}
                
                {/* Mobile Role-based Menu */}
                {isAuthenticated && isValid && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {displayName}
                    </div>
                    <DynamicNavigationMenu
                      userRole={role}
                      variant="vertical"
                      showIcons={true}
                      showDescriptions={false}
                      className="px-2"
                    />
                  </div>
                )}

                {/* Mobile Admin Menu */}
                {isAuthenticated && (role === 'Admin' || role === 'Administrator') && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Administração
                    </div>
                    {adminNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className={classNames(
                          isActive(item.href)
                            ? 'bg-primary/10 text-primary dark:bg-primary/20'
                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                          'flex items-center px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200'
                        )}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                )}

                {/* Mobile Login */}
                {!isAuthenticated && (
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className={classNames(
                      isActive('/login')
                        ? 'bg-primary/10 text-primary dark:bg-primary/20'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700',
                      'flex items-center px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200'
                    )}
                  >
                    <UserCircleIcon className="w-5 h-5 mr-3" />
                    Login
                  </Disclosure.Button>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* User Info Bar */}
      {isAuthenticated && <UserInfoBar />}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Sera462
              </h3>
              <p className="text-gray-400">
              Transformando o aprendizado em uma grande aventura!
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contato
              </h4>
              <p className="text-gray-400">
                Entre em contato conosco para mais informações.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">
              © 2024 Sera462. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedLayout;
