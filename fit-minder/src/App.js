import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Main from "./components/main"
import First from "./components/first"



function App() {


  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
