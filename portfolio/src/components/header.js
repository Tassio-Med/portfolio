import './header.css';

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
    </div>
  )
}
export default Header;
