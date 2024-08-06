import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './WristStretching.css';
import TimerBarWrist from './Timer-bar-wrist'; // Timer 컴포넌트 import
import StretchingChoosePage from '../Stretching-choose/Stretching-choose-page';

function WristStretching() {
    const location = useLocation();
    const navigate = useNavigate();
    const { timerDuration, nextIndex, stretchingQueue } = location.state || { timerDuration: 30000, nextIndex: 0, stretchingQueue: [] };
    const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            if (nextIndex < stretchingQueue.length - 1) {
                // 다음 스트레칭 페이지로 이동
                navigate('/wriststretching-second', { state: { timerDuration: 30000, nextIndex: nextIndex, stretchingQueue } });
            } else {
                // 모든 스트레칭이 끝나면 main 페이지로 이동
                navigate('/main');
            }
        }
    }, [timeLeft, navigate, nextIndex, stretchingQueue]);
    
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