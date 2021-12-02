import './App.css';
import Top from './Top';
import './Style/style.css'
import Navbar from './components/Navbar';
import { React, Component, useState, useCallback } from "react"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
    </div>
  );
}

export default App;
