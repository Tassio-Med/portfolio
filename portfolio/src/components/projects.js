import './projects.css';
import Image from '../images/todolist.jpg';

function Projects(){
  return(
    <div id="projects">
      <ul className="projects">
        <li className="project1 grow-card pro1-img">
          <img src={ Image } alt="todolist" className="img-todo"></img>
          <h3 >Projeto 1</h3>
        </li>
        <li className="project2 grow-card pro2-img">
          <h3>Projeto 2</h3>
        </li>
        <li className="project3 grow-card pro1-img">
          <h3>Projeto 3</h3>
        </li>
      </ul>
    </div>
  )
}

export default Projects;