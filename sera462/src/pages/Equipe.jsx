import React, { useState } from 'react';
import paulo from '../images/paulo.png'
import charles from '../images/charles.png'
import arthur from '../images/Arthur.png'
import charleu from '../images/charleu2.png'
import izabel from '../images/izabel.png'
import isael from '../images/isael.png'

const membros = [
  {
    id: 0,
    nome: 'CHARLEU TENÓRIO',
    cargo: 'CEO',
    descricao: 'Professor há mais de 5 anos na área de TI. Game Designer, Licenciatura em TI. Experiência com criação de Games, há mais de 6 anos.',
    imagem: charleu,
  },
  {
    id: 1,
    nome: 'CHARLES TENÓRIO',
    cargo: 'BACK-END DEVELOPER',
    descricao: 'Arquiteto de soluções, Desenvolvedor sênior mais de 20 anos como desenvolvedor, atualmente presta serviço para RedCar Itau ',
    imagem: charles,
  },
  {
    id: 2,
    nome: 'PAULO CAUÃ LEMOS',
    cargo: 'FRONT-END DEVELOPER',
    descricao: 'Com  2 anos de experiência em desenvolvimento de software, cursando Sistema de informação',
    imagem: paulo,
  },
  {
    id: 3,
    nome: 'IZABEL CRISTINA',
    cargo: 'GAMER TESTE',
    descricao: 'Instrutora no CESA, Cursando analise e desenvolvimento de sistemas',
    imagem: izabel,
  },
  {
    id: 4,
    nome: 'ARTHUR STIVEN',
    cargo: 'ARTISTA 3D/UX',
    descricao: 'Com mais de 10 anos de experiência com arte digital e modelagem 3D',
    imagem: arthur,
  },
  {
    id: 5,
    nome: 'ISAEL SOUSA SANTOS',
    cargo: 'DevOps na AWS',
    descricao: 'Com mais de 5 anos como arquiteto de software na empresa IsSoft Tecnologia Ltda',
    imagem: isael,
  }
];

function Equipe() {
  const [membroAtual, setMembroAtual] = useState(0);
  const membro = membros[membroAtual];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Equipe
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Conheça os profissionais apaixonados por tecnologia e educação 
              que fazem o Sera462 acontecer.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Member Information */}
            <div className="space-y-6">
              <div className="card p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {membro.cargo}
                  </h2>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {membro.nome}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {membro.descricao}
                  </p>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-3">
                  {membros.map((item, index) => (
                    <button
                      key={item.id}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === membroAtual 
                          ? 'bg-primary scale-125' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                      onClick={() => setMembroAtual(index)}
                      aria-label={`Ver ${item.nome}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Member Image */}
            <div className="relative">
              <div className="card p-8">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    src={membro.imagem}
                    alt={membro.nome}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Team Members Grid */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Conheça Toda a Equipe
            </h2>
            <p className="section-subtitle">
              Profissionais especializados em diferentes áreas da tecnologia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membros.map((membro) => (
              <div 
                key={membro.id} 
                className="card p-6 text-center hover:shadow-medium transition-all duration-300 cursor-pointer"
                onClick={() => setMembroAtual(membro.id)}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={membro.imagem}
                    alt={membro.nome}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {membro.nome}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {membro.cargo}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {membro.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipe;