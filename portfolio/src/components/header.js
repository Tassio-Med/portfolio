import './header.css';
import Hand from '../gif/peace1.gif'
// import About from './about'

function Header(){
  return(
    <div className="header">
      <h1>Bem-vindo ao meu Portfólio</h1>
      <div className="bckggif">
        <svg viewBox="15 -20 75 200" xmlns="http://www.w3.org/2000/svg" className="form">
        <path fill="#ffff" d="M66.6,-38.7C80.6,-14.3,82.2,17,69,39.6C55.8,62.1,27.9,75.9,-0.1,75.9C-28.1,76,-56.2,62.3,-70.5,39.1C-84.8,15.9,-85.4,-16.9,-71.3,-41.3C-57.3,-65.7,-28.6,-81.9,-1.2,-81.2C26.3,-80.5,52.7,-63.1,66.6,-38.7Z" transform="translate(100 100)" />
        </svg>
        <img src={Hand} alt="hand-shake" className="hand"/>
      </div>
    </div>
  )
}
export default Header;
// 18 -50 75 200