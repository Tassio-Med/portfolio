import About from "./components/about";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

import './App.css'

function App() {
  return (
    <div className="app">
      <Header/>
      <Projects/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

