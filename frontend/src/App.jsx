import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function HomePage({ scrollToSection }) {
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <BrowserRouter>
      <title>CC's Portfolio</title>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
        <Routes>
          <Route path="/" element={<HomePage scrollToSection={scrollToSection} />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
