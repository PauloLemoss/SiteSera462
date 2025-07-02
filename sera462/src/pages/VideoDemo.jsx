import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, PlayIcon } from '@heroicons/react/24/outline';
import DriveVideoPlayer from '../components/DriveVideoPlayer';

const VideoDemo = () => {
  const navigate = useNavigate();
  
  const videoUrl = "https://drive.google.com/file/d/1Cbe3xD2-zsyQEp6nanM9N9-8SfhO_vQe/view?usp=drive_link";

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
              <PlayIcon className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Demonstração Sera462
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Assista ao vídeo demonstrativo da nossa plataforma de gamificação educacional
          </p>
        </div>

        {/* Video Player */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <DriveVideoPlayer driveUrl={videoUrl} />
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre a Demonstração
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Este vídeo apresenta as principais funcionalidades da plataforma Sera462, 
            mostrando como nossa solução de gamificação educacional pode transformar 
            a experiência de aprendizado em sua instituição.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center p-4 bg-primary/10 dark:bg-primary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">Gestão</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Controle completo de alunos, turmas e professores
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/10 dark:bg-secondary/20 rounded-lg">
              <div className="text-2xl font-bold text-secondary mb-2">Gamificação</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Sistema de recompensas e engajamento
              </div>
            </div>
            <div className="text-center p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Resultados</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Acompanhamento de progresso e performance
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={handleVoltar}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center mx-auto"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo; 