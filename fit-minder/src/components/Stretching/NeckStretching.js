import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './Stretching.css';

function NeckStretching() {
    const [timeLeft, setTimeLeft] = useState(7);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            // 타이머가 끝났을 때, 다음 화면으로 이동
            navigate('/neckstretching-second');
        }
    }, [timeLeft, navigate]);

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
          <div className="bottom-section"></div>
      </div>
  );
};

export default NeckStretching;