import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/images/icon-back.png';
import './Stretching.css';
import TimerBarNeck from './Timer-bar-neck'; // Timer 컴포넌트 import
import StretchingChoosePage from '../Stretching-choose/Stretching-choose-page';
import FinalizeStretching from './FinalizeStretching';


function NeckStretchingSecond() {

        const location = useLocation();
        const navigate = useNavigate();
        const { timerDuration = 7000, nextIndex = 0, selectedCheckboxes = [] } = location.state || {};        
        const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

        console.log('location.state:', location.state);
        console.log('selectedCheckboxes:', selectedCheckboxes);
      
        useEffect(() => {

            if (!Array.isArray(selectedCheckboxes)) {
                console.error('selectedCheckboxes가 배열이 아닙니다.');
                return;
              }

            if (timeLeft > 0) {
                const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
                return () => clearTimeout(timerId);
            } else {
                if (nextIndex < selectedCheckboxes.length - 1) {
                    const nextStretching = selectedCheckboxes[nextIndex + 1];
                    if (nextStretching !== null) {
                        navigate(nextStretching.page, { state: { timerDuration: nextStretching.duration, nextIndex: nextIndex + 1, selectedCheckboxes } });
                    }
                } else {
                    // 모든 스트레칭이 끝나면 FinalizeStretching으로 이동
                    navigate('/FinalizeStretching', { state: { selectedCheckboxes } });
                }
            }
        }, [timeLeft, navigate, nextIndex, selectedCheckboxes]);


  return (
    <div className="screen-neck-two">
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
            <div className='timer-bar'>
              <TimerBarNeck initialTime={7} /> {/* Timer 컴포넌트 사용 */}
            </div>
          </div>
      </div>
  );
}

export default NeckStretchingSecond;