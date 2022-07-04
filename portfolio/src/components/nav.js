import './header.css';
// import Img from "../fonts/assinatura.svg"

function Nav(){
  return(
    <nav>
      {/* <img src={ Img } alt="portfolio-logo" /> */}
      <div class="elem-navigation">
        <li className="projectsnav line">
          <a href="#projects">Meus projetos</a>
          </li>
        <li className="about line">
          <a href="#about">Quem sou eu?</a>
        </li>
        <li className="contact line">
          <a href="#contact">Fale comigo</a>
        </li>
      </div>
    </nav>

  )
}

export default Nav;