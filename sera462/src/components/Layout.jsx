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
  UserGroupIcon
} from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Início', href: '/', icon: HomeIcon },
  { name: 'Quem Somos', href: '/quemsomos', icon: InformationCircleIcon },
  { name: 'Equipe', href: '/equipe', icon: UsersIcon },
  { name: 'Parceiros', href: '/parceiros', icon: BriefcaseIcon },
  { name: 'Contato', href: '/contato', icon: PhoneIcon },
];

const adminNavigation = [
  { name: 'Área de Acesso', href: '/areadeacesso', icon: UserCircleIcon },
  { name: 'Cadastro Aluno', href: '/cadastroaluno', icon: AcademicCapIcon },
  { name: 'Cadastro Turma', href: '/cadastroturma', icon: UserGroupIcon },
  { name: 'Cadastro Professor', href: '/cadastroprofessor', icon: UsersIcon },
  { name: 'Cadastro Instituição', href: '/tenant', icon: BuildingOfficeIcon },
  { name: 'Cadastro Usuário', href: '/user', icon: UserCircleIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = () => {
  const location = useLocation();
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-soft border-b border-gray-200 dark:border-gray-700">
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
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
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
                  
                  {/* Admin Menu Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                      className="nav-link flex items-center"
                    >
                      <UserCircleIcon className="w-4 h-4 mr-2" />
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

                  {/* Theme Toggle */}
                  <div className="ml-4">
                    <ThemeToggle />
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-2">
                  <ThemeToggle />
                  <Disclosure.Button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
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
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
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
                
                {/* Mobile Admin Menu */}
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
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sera462
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transformando a educação através da tecnologia e inovação.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Contato
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Entre em contato conosco para mais informações.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © 2024 Sera462. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;