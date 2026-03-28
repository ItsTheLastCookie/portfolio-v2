import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { OpenCodeSetup } from './components/OpenCodeSetup';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <OpenCodeSetup />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
