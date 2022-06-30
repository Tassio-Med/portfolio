import About from "./components/about";
import Nav from "./components/nav"
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

import './App.css'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Header/>
      <Projects/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

