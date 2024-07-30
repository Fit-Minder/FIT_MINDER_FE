import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import shoulderIconOne from '../../assets/images/shoulderstretching-icon-one.png';
import './Stretching.css';


function ShoulderStretching() {
    const [timeLeft, setTimeLeft] = useState(14);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            // 타이머가 끝났을 때, 다음 화면으로 이동
            navigate('/shoulderstretching-second');
        }
    }, [timeLeft, navigate]);

    
  return (
      <div className="screen">
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
          <div className="bottom-section">
              <img src={shoulderIconOne} alt="Shoulder Icon one" className="shoulderstretching-icon-first-image" />
          </div>
      </div>
  );
};

export default ShoulderStretching;