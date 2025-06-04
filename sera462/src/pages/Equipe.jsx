import '../styles/main.css';
import { useState } from 'react';
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
    <div className="container-equipe">
      <section className="section-equipe">
        <div className="information-equipe">
          <div className="description-people">
            <h2 className="title-position">{membro.cargo}</h2>
            <h1 className="name-developer">{membro.nome}</h1>
            <p className="description-developer">{membro.descricao}</p>

            <div className="dots">
              {membros.map((item, index) => (
                <button
                  key={item.id}
                  className={`dot ${index === membroAtual ? 'active' : ''}`}
                  onClick={() => setMembroAtual(index)}
                />
              ))}
            </div>
          </div>

          <div className="image-people">
            <img
              className={`image-equipe imagem-${membro.id}`}
              src={membro.imagem}
              alt={membro.nome}
            />
          </div>
        </div>
      </section>
    </div>
  );
}


export default Equipe;