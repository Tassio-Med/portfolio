import './header.css';
import Hand from '../gif/peace1.gif'

function Header(){
  return(
    <div>
      <nav>
        <li className="projects">
          <a href="#projects">Meus projetos</a>
          </li>
        <li className="about">
          <a href="#about">Quem sou eu?</a>
        </li>
        <li className="contact">
          <a href="#contact">Fale comigo</a>
        </li>
      </nav>
      <h1>Bem-vindo ao meu Portfólio</h1>
      <div className="bckggif">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="form">
        <path fill="#FFFFFF" d="M45.7,-48.4C56.9,-34.5,62.1,-17.2,60.2,-1.8C58.4,13.6,49.5,27.1,38.3,33.7C27.1,40.3,13.6,39.9,0.9,39C-11.7,38.1,-23.4,36.6,-39.1,30C-54.9,23.4,-74.8,11.7,-76.5,-1.7C-78.2,-15.1,-61.8,-30.3,-46,-44.2C-30.3,-58.1,-15.1,-70.9,1,-71.9C17.2,-73,34.5,-62.3,45.7,-48.4Z" transform="translate(100 100)"/>
        </svg>
        <img src={Hand} alt="hand-shake" className="hand"/>
      </div>
    </div>
  )
}
export default Header;
