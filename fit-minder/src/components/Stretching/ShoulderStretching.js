import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './Stretching.css';
import TimerBarShoulder from './Timer-bar-shoulder'; // Timer 컴포넌트 import
import StretchingChoosePage from '../Stretching-choose/Stretching-choose-page';

function ShoulderStretching() {
    const location = useLocation();
    const navigate = useNavigate();
    const { timerDuration, nextIndex, stretchingQueue } = location.state || { timerDuration: 15000, nextIndex: 0, stretchingQueue: [] };
    const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            if (nextIndex < stretchingQueue.length - 1) {
                // 다음 스트레칭 페이지로 이동
                navigate('/shoulderstretching-second', { state: { timerDuration: 15000, nextIndex: nextIndex, stretchingQueue } });
            } else {
                // 모든 스트레칭이 끝나면 main 페이지로 이동
                navigate('/main');
            }
        }
    }, [timeLeft, navigate, nextIndex, stretchingQueue]);
    
  return (
      <div className="screen-shoulder-one">
          <div className="top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
                  <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                  <p className="inner-appbar">어깨 스트레칭</p>
              </div>
              <div className="text-first-step">
                  <div className="step-one">STEP 1</div>
                  <div className="step-one-instructions">
                    오른팔을 왼쪽으로 쭉 뻗어넘기고<br/>
                    왼팔을 걸어 잡아주세요
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className='timer-bar'> 
            <TimerBarShoulder initialTime={60} /> {/* Timer 컴포넌트 사용 */}
          </div>
    </div>
  );
};

export default ShoulderStretching;