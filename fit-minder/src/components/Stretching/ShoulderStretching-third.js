import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './Stretching.css';
import TimerBarShoulder from './Timer-bar-shoulder'; // Timer 컴포넌트 import

function ShoulderStretchingThird() {
    const [timeLeft, setTimeLeft] = useState(15);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            // 타이머가 끝났을 때, 다음 화면으로 이동
            navigate('/shoulderstretching-fourth');
        }
    }, [timeLeft, navigate]);

  return (
      <div className="screen-shoulder-two">
          <div className="top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
                  <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                  <p className="inner-appbar">어깨 스트레칭</p>
              </div>
              <div className="text-third-step">
                  <div className="step-three">STEP 3</div>
                  <div className="step-three-instructions">
                    왼팔을 오른쪽으로 쭉 뻗어넘기고<br/>
                    오른팔을 걷어 잡아주세요
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className='timer-bar'> 
            <TimerBarShoulder initialTime={30} /> {/* Timer 컴포넌트 사용 */}
          </div>
      </div>
  );
};

export default ShoulderStretchingThird;