import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './WristStretching.css';
import backIcon from '../../assets/images/icon-back.png';
import TimerBarWrist from './Timer-bar-wrist'; // Timer 컴포넌트 import
import StretchingChoosePage from '../Stretching-choose/Stretching-choose-page';

function WristStretchingSecond() {
  /*
    const location = useLocation();
    const navigate = useNavigate();
    const { timerDuration, nextIndex } = location.state || { timerDuration: 30000, nextIndex: null }; // 기본값 설정
    const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            if (nextIndex !== null) {
                navigate(routes[nextIndex], { state: { timerDuration: timers[nextIndex], nextIndex: nextIndex + 1 } });
            } else {
                navigate('/main');
            }
        }
    }, [timeLeft, navigate, nextIndex]);
    */
    /*
      const location = useLocation();
      const navigate = useNavigate();
      const { timerDuration, nextIndex, stretchingQueue } = location.state || { timerDuration: 30000, nextIndex: 0, stretchingQueue: [] };
      const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);
  
      useEffect(() => {
          if (timeLeft > 0) {
              const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
              return () => clearTimeout(timerId);
          } else {
              const nextStretching = stretchingQueue[nextIndex + 1];
              if (nextStretching) {
                  const { page, duration } = nextStretching;
                  navigate(page, { state: { timerDuration: duration, nextIndex: nextIndex + 1, stretchingQueue } });
              } else {
                  navigate('/main');
              }
          }
      }, [timeLeft, navigate, nextIndex, stretchingQueue]);
    */

  const location = useLocation();
  const navigate = useNavigate();
  const { timerDuration, nextIndex, selectedCheckboxes } = location.state || { timerDuration: 30000, nextIndex: 0, selectedCheckboxes: [] };
  const [timeLeft, setTimeLeft] = useState(timerDuration / 1000);

  console.log('location.state:', location.state);
  console.log('selectedCheckboxes:', selectedCheckboxes);

  useEffect(() => {
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
}

export default WristStretchingSecond;