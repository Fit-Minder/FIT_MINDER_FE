import React, { useState, useEffect } from 'react';
import './EyeStretching.css';
import backIcon from '../../assets/images/icon-back.png';
import TimerBarEye from './Timer-bar-eye'; // Timer 컴포넌트 import


function EyeStretchingSecond() {
    const [timeLeft, setTimeLeft] = useState(10);
  
    useEffect(() => {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      }
    }, [timeLeft]);

    return (
        <div className="screen-eye-two">
            <div className="top-section">
                <div className="StatusBar"></div>
                <div className="appbar">
                    <img src={backIcon} alt="Back Icon" className="back-icon-image" />
                    <p className="inner-appbar">눈 스트레칭</p>
                </div>
                <div className="text-second-step">
                    <div className="step-two">STEP 2</div>
                    <div className="step-two-instructions">
                      검지에서 시선을 떼지 말고<br/>
                      최대한 가운데로 몰릴때까지 <br/>
                      손가락을 가까이 가져와주세요
                    </div>
                    <div className="timer">{timeLeft}</div> {/* 타이머 추가 */}
                </div>
            </div>
            <div className="bottom-section">
              <div className='timer-bar'>
                <TimerBarEye initialTime={10} /> {/* Timer 컴포넌트 사용 */}
              </div>
            </div>
        </div>
    );
  };
  
  export default EyeStretchingSecond;