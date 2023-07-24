import './App.css';
import '../src/Style/style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Contact from './Pages/Contact';
import Home from './Pages/Home';
import SkillsPage from './Pages/SkillsPage';
import NotFound from './Pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/React_CV" element={<Home />} />
        <Route path="/contact" element={<Contact />} />          
        <Route path="/skills" element={<SkillsPage />} />         
        <Route path="*" element={<NotFound />} />  
      </Routes>       
    </BrowserRouter>
  );
}

export default App;
