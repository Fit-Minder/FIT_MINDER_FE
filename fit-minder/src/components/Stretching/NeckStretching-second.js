import React, { useState, useEffect } from 'react';
import backIcon from '../../assets/images/icon-back.png';
import neckIconTwo from '../../assets/images/neckstretching-icon-two.png';
import './Stretching.css';


function NeckStretchingSecond() {
  const [timeLeft, setTimeLeft] = useState(7);

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
              <p className="inner-appbar">목 스트레칭</p>
            </div>
            <div className="text-second-step">
              <div className="step-two">STEP 2</div>
              <div className="step-two-instructions">
                왼쪽 손으로 머리를 천천히<br/>
                왼쪽 어깨 쪽으로 7초동안 당겨주세요
              </div>
              <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
            </div>
          </div>
          <div className="bottom-section">
            <img src={neckIconTwo} alt="Neck Icon Two" className="neckstretcing-icon-second-image" />
          </div>
      </div>
  );
}

export default NeckStretchingSecond;