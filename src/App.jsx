import React, { useRef } from 'react'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'



const App = () => {
      const aboutRef = useRef(null);
      const skillsRef = useRef(null);
      const homeRef = useRef(null);

      const scrollToSection = (ref)=>{
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
  return (
    <div className='w-full min-h-screen  '>
      <>
     <NavBar onScroll={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef}/>
     <Hero sectionRef={homeRef}/>
     <About sectionRef={aboutRef}/>
     <Skills sectionRef={skillsRef}/>
     <Contact/>
   
    
      </>
    </div>
  )
}

export default App
