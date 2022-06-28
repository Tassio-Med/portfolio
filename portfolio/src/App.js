import About from "./components/about";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="app">
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;

