import './home.css'
import imagemSera from '../images/imageSera462.jpg';






function Home() {
    return (
      <div className="container-home">
        <div className="home-content">
          <section className="section-image-title">
            <div className="image-wrapper">
              <img className="image-sera462" src={imagemSera} alt="imagem-sera-462" />
            </div>
            <h2 className="title-home">TRANSFORMANDO O APRENDIZADO EM UMA GRANDE AVENTURA</h2>
          </section>
        </div>
      </div>
    );
  }
  

export default Home