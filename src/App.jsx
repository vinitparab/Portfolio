import React, { useRef } from 'react';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen scroll-smooth">
      <NavBar
        onScroll={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Hero sectionRef={homeRef} />
      <About sectionRef={aboutRef} />
      <Skills sectionRef={skillsRef} />
      <Projects sectionRef={projectsRef} />
      <Contact />
    </div>
  );
};

export default App;
