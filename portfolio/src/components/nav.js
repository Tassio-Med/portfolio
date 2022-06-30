import './header.css'

function Nav(){
  return(
    <nav>
        <div class="elem-navigation">
          <li className="projects">
            <a href="#projects">Meus projetos</a>
            </li>
          <li className="about">
            <a href="#about">Quem sou eu?</a>
          </li>
          <li className="contact">
            <a href="#contact">Fale comigo</a>
          </li>
        </div>
      </nav>

  )
}

export default Nav;