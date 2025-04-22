import './parceiros.css'
import imageEte from "../images/parceiros-bg.png"



function Parceiros(){
    return(
        <div className="container-parceiros">
              <div className="image-wrapper">
                          <img className="image-ete" src={imageEte} alt="imagem-sera-462" />
                        </div>
                        <h2 className="title-parceiros">Escola Técnica Estadual Professor Francisco Jonas Feitosa Costa-Arcoverde -PE</h2>
                        <h2 className='title-parceiros2'>Escola Técnica Estadual Arlindo Ferreira dos Santos - Sertânia-PE</h2>
        </div>
    )
}


export default Parceiros