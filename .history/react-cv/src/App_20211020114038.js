import './App.css';
import Top from './components/Top';
import Skills from './components/Skills';
import './Style/style.css'
import React from 'react'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Download from './components/Download';

function App() {
  return (
    <div className="App">
      <Top />
      <Skills />
      <Footer />
      <Nav />
      <Download />
    </div>
  );
}

export default App;
