import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './WristStretching.css';
import TimerBarWrist from './Timer-bar-wrist'; // Timer 컴포넌트 import


function WristStretching() {
    const [timeLeft, setTimeLeft] = useState(30);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            // 타이머가 끝났을 때, 다음 화면으로 이동
            navigate('/wriststretching-second');
        }
    }, [timeLeft, navigate]);

    
  return (
      <div className="screen-wrist-one">
          <div className="wrist-top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
                  <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                  <p className="inner-appbar">손목 스트레칭</p>
              </div>
              <div className="text-first-step">
                  <div className="step-one">STEP 1</div>
                  <div className="step-one-instructions">
                    두팔을 앞으로 뻗고 손가락이<br/>
                    하늘을 향하도록 위로 꺾어주세요
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className="wrist-bottom-section">
            <div className='timer-bar'>
              <TimerBarWrist initialTime={60} /> {/* Timer 컴포넌트 사용 */}
            </div>
          </div>
      </div>
  );
};

export default WristStretching;