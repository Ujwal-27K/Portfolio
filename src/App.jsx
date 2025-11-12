import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import LeetCodeStats from './components/LeetCodeStats';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Projects />
        {/* Gallery is maintained in code but hidden from UI */}
        <Gallery />
        <Skills />
        <Certificates />
        <LeetCodeStats />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
