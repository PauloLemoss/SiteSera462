import React from "react";
import "./quemsomos.css";

function QuemSomos() {
  return (
    <div className="container-quem-somos">
      <div className="wrapper-horizontal">

        <div className="container-textos">
          <h1 className="titulo">Boas-vindas aos Exploradores do Futuro!</h1>
          <p className="paragrafo-texto-1">
            Seja bem-vindo(a) à SERA462, onde a educação ganha vida em um universo de ficção científica!
            Aqui, você não é apenas um estudante, mas um explorador em uma jornada intergaláctica
            repleta de desafios e descobertas. Cada atividade pedagógica é uma missão a ser cumprida,
            unindo conhecimento prático, tecnologia e narrativas imersivas para transformar seu aprendizado
            em uma aventura única. <br /><br />

            Nossa plataforma foi projetada para que você avance no jogo enquanto domina conteúdos do
            ensino médio e técnico, com desafios personalizados e recursos que estimulam sua curiosidade.
            Professores acompanham seu progresso e criam missões alinhadas aos seus objetivos, tudo com o
            suporte de inteligência artificial. <br /><br />

            Prepare-se para decifrar enigmas, dominar habilidades e desvendar os segredos do conhecimento.
            O futuro da educação é agora, e ele começa aqui. Transformando o aprendizado em uma grande aventura.
          </p>
        </div>

        <div className="bloco-transforme">
          <h2 className="subtitulo-transforme">
            🚀 Transforme a Educação com Ciência e Inovação
          </h2>
          <p className="paragrafo-transforme">
            A SERA462 é a solução que sua instituição de ensino procura para engajar alunos e potencializar
            resultados pedagógicos.
          </p>
          <ul className="lista-transforme">
            <li>
              <span role="img" aria-label="foguete">🚀</span> <strong>Desafios alinhados à neurociência:</strong> 
              Atividades gamificadas estimulam a liberação de dopamina, promovendo maior engajamento e
              fixação do conteúdo.
            </li>
            <li>
              <span role="img" aria-label="foguete">🚀</span> <strong>Narrativas imersivas:</strong> 
              Histórias de ficção científica ativam a curiosidade e criam conexões emocionais com os temas abordados.
            </li>
            <li>
              <span role="img" aria-label="foguete">🚀</span> <strong>Inteligência Artificial estratégica:</strong> 
              Geramos questões personalizadas e análises preditivas para apoiar o trabalho docente.
            </li>
          </ul>
          <p className="paragrafo-transforme-final">
            Com um modelo escalável e adaptável, a SERA462 se integra facilmente ao seu currículo,
            transformando o aprendizado em uma Grande Aventura.
          </p>
        </div>

      </div>
    </div>
  );
}

export default QuemSomos;