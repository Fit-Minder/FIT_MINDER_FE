import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import shoulderIconOne from '../../assets/images/shoulderstretching-icon-one.png';
import './Stretching.css';


function ShoulderStretchingSecond() {
    const [timeLeft, setTimeLeft] = useState(10);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            // 타이머가 끝났을 때, 다음 화면으로 이동
            navigate('/shoulderstretching-third');
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
              <div className="text-second-step">
                  <div className="step-two">STEP 2</div>
                  <div className="step-two-instructions">
                    오른손을 활짝 펴서<br/>
                    손목을 천천히 회전시켜주세요
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

export default ShoulderStretchingSecond;