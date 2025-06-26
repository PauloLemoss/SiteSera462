import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UsersIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import seraLogo from '../images/sera_logo.jpeg';
  
const features = [
  {
    icon: AcademicCapIcon,
    title: 'Gestão Educacional',
    description: 'Sistema completo para gerenciar alunos, turmas e professores de forma eficiente.',
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: UsersIcon,
    title: 'Colaboração em Equipe',
    description: 'Ferramentas para facilitar a comunicação e colaboração entre educadores.',
    color: 'text-green-600 dark:text-green-400'
  },
  {
    icon: ChartBarIcon,
    title: 'Análise de Dados',
    description: 'Relatórios e dashboards para acompanhar o progresso dos estudantes.',
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Segurança Total',
    description: 'Proteção de dados e privacidade garantidas com as melhores práticas.',
    color: 'text-red-600 dark:text-red-400'
  }
];

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Coordenadora Pedagógica',
    content: 'O Sera462 revolucionou nossa forma de gerenciar a instituição. Interface intuitiva e funcionalidades poderosas.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'João Santos',
    role: 'Professor',
    content: 'Excelente plataforma para acompanhar o progresso dos alunos. Recomendo fortemente!',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Ana Costa',
    role: 'Diretora',
    content: 'Implementação simples e suporte excepcional. Transformou nossa gestão educacional.',
    avatar: '/api/placeholder/40/40'
  }
];

const stats = [
  { label: 'Instituições Atendidas', value: '150+' },
  { label: 'Usuários Ativos', value: '10K+' },
  { label: 'Satisfação', value: '98%' },
  { label: 'Anos de Experiência', value: '5+' }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center py-20 lg:py-32">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Transformando o{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  aprendizado
                </span>{' '}
                em uma grande aventura
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Plataforma completa para gestão educacional. Simplifique processos, 
                melhore resultados e conecte sua comunidade escolar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/areadeacesso"
                  className="btn-primary text-lg px-8 py-3 flex items-center justify-center"
                >
                  Começar Agora
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/login"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg flex items-center justify-center"
                >
                  Entrar
                </Link>
                <a
                  href="https://drive.google.com/file/d/1Cbe3xD2-zsyQEp6nanM9N9-8SfhO_vQe/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-lg px-8 py-3 flex items-center justify-center"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Ver Demo
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-medium p-8 animate-fade-in">
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                      <img 
                        src={seraLogo} 
                        alt="Sera462 Logo" 
                        className="relative w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-700"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Sera462
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Plataforma de Gameficação Educacional
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary">150+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Instituições</div>
                        </div>
                        <div className="bg-secondary/10 dark:bg-secondary/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-secondary">10K+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Usuários</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Por que escolher o Sera462?
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Nossa plataforma oferece todas as ferramentas necessárias para 
              modernizar sua gestão educacional e impulsionar resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              O que nossos clientes dizem
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Descubra como o Sera462 está transformando a gestão educacional 
              em instituições de todo o Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua instituição?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de instituições que já confiam no Sera462 
            para modernizar sua gestão educacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
            >
              Solicitar Demonstração
            </Link>
            <Link
              to="/areadeacesso"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Acessar Plataforma
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;