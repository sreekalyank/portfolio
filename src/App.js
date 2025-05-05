import React from 'react';
import './index.css';
import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import Home from './Components/Home/home';
import About from './Components/ABout/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        
      </main>
    </div>
  );
}

export default App;
