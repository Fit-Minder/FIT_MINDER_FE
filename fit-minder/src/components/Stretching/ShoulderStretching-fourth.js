import React, { useState, useEffect } from 'react';
import backIcon from '../../assets/images/icon-back.png';
import shoulderIconOne from '../../assets/images/shoulderstretching-icon-one.png';
import './Stretching.css';


function ShoulderStretchingFourth() {
    const [timeLeft, setTimeLeft] = useState(10);
  
    useEffect(() => {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      }
    }, [timeLeft]);

  return (
      <div className="screen">
          <div className="top-section">
              <div className="StatusBar"></div>
              <div className="appbar">
                  <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                  <p className="inner-appbar">어깨 스트레칭</p>
              </div>
              <div className="text-fourth-step">
                  <div className="step-four">STEP 4</div>
                  <div className="step-four-instructions">
                    왼손을 활짝 펴서<br/>
                    손목을 천천히 회전시켜주세요
                  </div>
                  <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
              </div>
          </div>
          <div className="bottom-section">
              <img src={shoulderIconOne} alt="Shoulder Icon two" className="shoulderstretching-icon-second-image" />
          </div>
      </div>
  );
};

export default ShoulderStretchingFourth;