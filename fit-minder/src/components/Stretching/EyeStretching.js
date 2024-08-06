import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EyeStretching.css';
import backIcon from '../../assets/images/icon-back.png';
import TimerBarEye from './Timer-bar-eye'; // Timer 컴포넌트 import


function EyeStretching() {
  const location = useLocation();
  const navigate = useNavigate();
  const { timerDuration, nextIndex, stretchingQueue } = location.state || { timerDuration: 10000, nextIndex: 0, stretchingQueue: [] };
  const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

  useEffect(() => {
      if (timeLeft > 0) {
          const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
          return () => clearTimeout(timerId);

      } else {
          if (nextIndex < stretchingQueue.length - 1) {
              // 다음 스트레칭 페이지로 이동
              navigate('/eyestretching-second', { state: { timerDuration: 10000, nextIndex: nextIndex, stretchingQueue } });
          } else {
              // 모든 스트레칭이 끝나면 main 페이지로 이동
              navigate('/main');
          }
      }
  }, [timeLeft, navigate, nextIndex, stretchingQueue]);

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };
    
  return (
      <div className="screen-eye-one">
          <div className="top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
              <img src={backIcon} alt="Back Icon" className="back-icon-image" onClick={handleBackClick} />
                <p className="inner-appbar">눈 스트레칭</p>
              </div>
              <div className="text-first-step">
                  <div className="step-one">STEP 1</div>
                  <div className="step-one-instructions">
                    검지를 양쪽 눈 가운데 지점으로부터 30cm<br/>
                    떨어진 곳에서 손가락 끝을 응시해주세요<br/>
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className="bottom-section">
            <div className='timer-bar'>
              <TimerBarEye initialTime={20} /> {/* Timer 컴포넌트 사용 */}
            </div>
          </div>
      </div>
  );
};

export default EyeStretching;