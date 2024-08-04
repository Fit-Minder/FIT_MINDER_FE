// src/components/Stretching/Timer-bar.js
import React, { useState, useEffect } from 'react';
import './Timer-bar-shoulder.css'; // CSS 파일 import

const TimerBar = ({ initialTime, onFinish }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const totalTime = 60; // 총 시간 (초)

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timerId);
                    if (onFinish) onFinish();
                    return prevTime;
                }
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [onFinish]);

    const progressWidth = ((totalTime - timeLeft) / totalTime) * 100;

    return (
        <div className="timer-bar-container">
            <div 
                className="progress-bar" 
                style={{ width: `${progressWidth}%` }}
            ></div>
            <div 
                className="current-time-indicator" 
                style={{ left: `${progressWidth}%` }}
            ></div>
            <div className="timer-text">
                <span>{timeLeft}s</span>
                <span>{totalTime}s</span>
            </div>
        </div>
    );
};

export default TimerBar;
