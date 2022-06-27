import './header.css';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <h1>Bem-vindo ao meu portfolio</h1>
      <div>
        <Link className="boards" to="/">Meus projetos</Link>
      </div>
      <div>
        <Link className="boards" to="/">Quem sou eu?</Link>
      </div>
      <div>
        <Link className="boards" to="/">Fale comigo</Link>
      </div>  
    </header>
  )
}
export default Header;
