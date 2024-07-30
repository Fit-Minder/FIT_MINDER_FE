import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Main from "./components/main"
import First from "./components/first"
import Test from "./components/test"



function App() {


  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/main" element={<Main />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
