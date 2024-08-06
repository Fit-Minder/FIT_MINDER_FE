import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './Stretching.css';
import TimerBarNeck from './Timer-bar-neck'; // Timer 컴포넌트 import
import StretchingChoosePage from '../Stretching-choose/Stretching-choose-page';

function NeckStretching() {
    const location = useLocation();
    const navigate = useNavigate();
    const { timerDuration, nextIndex, stretchingQueue } = location.state || { timerDuration: 7000, nextIndex: 0, stretchingQueue: [] };
    const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            if (nextIndex < stretchingQueue.length - 1) {
                // 다음 스트레칭 페이지로 이동
                navigate('/neckstretching-second', { state: { timerDuration: 7000, nextIndex: nextIndex, stretchingQueue } });
            } else {
                // 모든 스트레칭이 끝나면 main 페이지로 이동
                navigate('/main');
            }
        }
    }, [timeLeft, navigate, nextIndex, stretchingQueue]);

  return (
      <div className="screen-neck-one">
          <div className="top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
                  <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                  <p className="inner-appbar">목 스트레칭</p>
              </div>
              <div className="text-first-step">
                  <div className="step-one">STEP 1</div>
                  <div className="step-one-instructions">
                      오른쪽 손으로 머리를 천천히<br/>
                      오른쪽 어깨 쪽으로 7초동안 당겨주세요
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className="bottom-section">
            <div className='timer-bar'> 
            <TimerBarNeck initialTime={14} /> {/* Timer 컴포넌트 사용 */}
            </div>
          </div>
      </div>
  );
};

export default NeckStretching;