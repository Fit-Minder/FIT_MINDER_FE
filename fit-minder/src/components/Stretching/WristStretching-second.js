import React, { useState, useEffect } from 'react';
import './WristStretching.css';
import backIcon from '../../assets/images/icon-back.png';
import TimerBarWrist from './Timer-bar-wrist'; // Timer 컴포넌트 import


function WristStretchingSecond() {
    const [timeLeft, setTimeLeft] = useState(30);
  
    useEffect(() => {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      }
    }, [timeLeft]);

    return (
        <div className="screen-wrist-two">
            <div className="wrist-top-section">
                <div className="StatusBar"></div>
                <div className="appbar">
                    <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                    <p className="inner-appbar">손목 스트레칭</p>
                </div>
                <div className="text-second-step">
                    <div className="step-two">STEP 2</div>
                    <div className="step-two-instructions">
                      다시 아래로 꺾어주시고<br/>
                      30초 정도 반복해주세요
                    </div>
                    <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
                </div>
            </div>
            <div className="wrist-bottom-section">
            <div className='timer-bar'>
              <TimerBarWrist initialTime={30} /> {/* Timer 컴포넌트 사용 */}
              </div>
            </div>
        </div>
    );
  };

export default WristStretchingSecond;