import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './styles/calendar.css';
import Main from "./components/main";
import First from "./components/first";
import Calendar from "./components/calendar";



function App() {


  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/main" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
