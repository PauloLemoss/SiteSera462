import React from "react";
import { 
  RocketLaunchIcon, 
  LightBulbIcon, 
  BookOpenIcon,
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

function QuemSomos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Boas-vindas aos{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Exploradores do Futuro!
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Seja bem-vindo(a) à SERA462, onde a educação ganha vida em um universo de ficção científica! 
              Aqui, você não é apenas um estudante, mas um explorador em uma jornada intergaláctica 
              repleta de desafios e descobertas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Welcome Text */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Transformando o Aprendizado em Aventura
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Cada atividade pedagógica é uma missão a ser cumprida, unindo conhecimento prático, 
                  tecnologia e narrativas imersivas para transformar seu aprendizado em uma aventura única.
                </p>
                <p>
                  Nossa plataforma foi projetada para que você avance no jogo enquanto domina conteúdos do 
                  ensino médio e técnico, com desafios personalizados e recursos que estimulam sua curiosidade.
                </p>
                <p>
                  Professores acompanham seu progresso e criam missões alinhadas aos seus objetivos, 
                  tudo com o suporte de inteligência artificial.
                </p>
                <p>
                  Prepare-se para decifrar enigmas, dominar habilidades e desvendar os segredos do conhecimento. 
                  O futuro da educação é agora, e ele começa aqui.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="card p-8">
                <div className="flex items-center mb-4">
                  <RocketLaunchIcon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Transforme a Educação com Ciência e Inovação
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  A SERA462 é a solução que sua instituição de ensino procura para engajar alunos e 
                  potencializar resultados pedagógicos.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <LightBulbIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Desafios alinhados à neurociência:</strong>
                      <p className="text-gray-600 dark:text-gray-400">
                        Atividades gamificadas estimulam a liberação de dopamina, promovendo maior engajamento 
                        e fixação do conteúdo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <BookOpenIcon className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Narrativas imersivas:</strong>
                      <p className="text-gray-600 dark:text-gray-400">
                        Histórias de ficção científica ativam a curiosidade e criam conexões emocionais 
                        com os temas abordados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <SparklesIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Inteligência Artificial estratégica:</strong>
                      <p className="text-gray-600 dark:text-gray-400">
                        Geramos questões personalizadas e análises preditivas para apoiar o trabalho docente.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mt-6">
                  Com um modelo escalável e adaptável, a SERA462 se integra facilmente ao seu currículo, 
                  transformando o aprendizado em uma Grande Aventura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Por que escolher a SERA462?
            </h2>
            <p className="section-subtitle">
              Descubra como nossa plataforma revoluciona a educação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Gamificação Avançada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transforme o aprendizado em uma aventura intergaláctica com missões e desafios envolventes.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Neurociência Aplicada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Metodologias baseadas em evidências científicas para maximizar o engajamento e retenção.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                IA Personalizada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Inteligência artificial que adapta o conteúdo às necessidades individuais de cada aluno.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Acompanhamento Docente
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ferramentas para professores acompanharem o progresso e criarem missões personalizadas.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Análise Preditiva
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Relatórios e insights para identificar oportunidades de melhoria no aprendizado.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-orange-500/10 dark:bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Conteúdo Adaptativo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currículo flexível que se adapta ao ritmo e estilo de aprendizado de cada estudante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;