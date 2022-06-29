import './App.css';
import './login.css';
import './button.css';
import './card.css';
import React from 'react'
import Home from "./Pages/home"
import Tier from "./Pages/tier"
import Hero from "./Pages/hero"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/tier" exact element={<Tier/>} />
          <Route path="/hero" exact element={<Hero/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
