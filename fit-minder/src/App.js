import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NeckStretching from './components/Stretching/NeckStretching';
import './App.css';
import MainScreen from './components/MainNeckStretchingScreen';
import NeckStretchingSecond from './components/Stretching/NeckStretching-second';
import ShoulderStretching from './components/Stretching/ShoulderStretching';
import ShoulderStretchingSecond from './components/Stretching/ShoulderStretching-second';
import ShoulderStretchingThird from './components/Stretching/ShoulderStretching-third';
import ShoulderStretchingFourth from './components/Stretching/ShoulderStretching-fourth';
import WristStretching from './components/Stretching/WristStretching';
import WristStretchingSecond from './components/Stretching/WristStretching-second';
import EyeStretching from './components/Stretching/EyeStretching';
import EyeStretchingSecond from './components/Stretching/EyeStretching-second';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/neckstretching" element={<NeckStretching />} />
          <Route path="/neckstretching-second" element={<NeckStretchingSecond />} />
          <Route path="/shoulderstretching" element={<ShoulderStretching />} />
          <Route path="/shoulderstretching-second" element={<ShoulderStretchingSecond />} />
          <Route path="/shoulderstretching-third" element={<ShoulderStretchingThird />} />
          <Route path="/shoulderstretching-fourth" element={<ShoulderStretchingFourth />} />
          <Route path="/wriststretching" element={<WristStretching />} />
          <Route path="/wriststretching-second" element={<WristStretchingSecond />} />
          <Route path="/eyestretching" element={<EyeStretching />} />
          <Route path="/eyestretching-second" element={<EyeStretchingSecond />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
