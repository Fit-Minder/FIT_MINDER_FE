import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EyeStretching.css';
import backIcon from '../../assets/images/icon-back.png';


function EyeStretching() {
    const [timeLeft, setTimeLeft] = useState(10);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            // 타이머가 끝났을 때, 다음 화면으로 이동
            navigate('/eyestretching-second');
        }
    }, [timeLeft, navigate]);

    
  return (
      <div className="screen-eye-one">
          <div className="top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
                <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                <p className="inner-appbar">눈 스트레칭</p>
              </div>
              <div className="text-first-step">
                  <div className="step-one">STEP 1</div>
                  <div className="step-one-instructions">
                    검지를 양쪽 눈 가운데 지점으로부터<br/>
                    30cm 떨어진 곳에서 손가락<br/>
                    끝을 응시해주세요
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className="bottom-section">
          </div>
      </div>
  );
};

export default EyeStretching;