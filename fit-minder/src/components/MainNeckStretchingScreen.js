import React, { useState, useEffect } from 'react';
import './MainNeckStretchingScreen.css';
import { useNavigate } from 'react-router-dom';
import NeckStretching from './Stretching/NeckStretching';
import NeckStretchingSecond from './Stretching/NeckStretching-second';

const MainScreen = () => {
  const [elapsedTime, setElapsedTime] = useState(0); // 타이머 시작 시간
  const totalTime = 14; // 총 시간 (14초)
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState(<NeckStretching />);

  useEffect(() => {
    const timerId = setInterval(() => {
      setElapsedTime(prev => {
        if (prev < totalTime) {
          return prev + 1;
        } else {
          clearInterval(timerId);
          return prev;
        }
      });
    }, 1000);
  
    return () => clearInterval(timerId);
  }, []);
  
  useEffect(() => {
    if (elapsedTime === 7) {
      setCurrentComponent(<NeckStretchingSecond />);
    }
    console.log('Elapsed Time:', elapsedTime); // 디버깅용 로그
  }, [elapsedTime]);

  return (
    <div className="main-screen">
      {currentComponent}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${(elapsedTime / totalTime) * 100}%` }}
        ></div>
        <div className="time-label">
          <span className="current-time">{elapsedTime}</span>
          <span className="total-time">{totalTime}</span>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;