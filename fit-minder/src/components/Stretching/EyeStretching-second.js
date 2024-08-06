import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EyeStretching.css';
import backIcon from '../../assets/images/icon-back.png';
import TimerBarEye from './Timer-bar-eye'; // Timer 컴포넌트 import
import StretchingChoosePage from '../Stretching-choose/Stretching-choose-page';

    function EyeStretchingSecond() {
        const location = useLocation();
        const navigate = useNavigate();
        const { timerDuration = 10000, nextIndex = 0, selectedCheckboxes = [] } = location.state || {};
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
                      검지에서 시선을 떼지 말고 최대한 가운데로<br/>
                      몰릴때까지 손가락을 가까이 가져와주세요<br/>
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