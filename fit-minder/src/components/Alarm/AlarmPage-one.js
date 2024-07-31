import React, { useState } from 'react';
import './AlarmPage-one.css';
import backIconBlack from '../../assets/images/icon-back-black.png';


function AlarmPageOne() {
    const [activeButtons, setActiveButtons] = useState([]);

    const handleButtonClick = (index) => {
        setActiveButtons((prevActiveButtons) => 
            prevActiveButtons.includes(index) 
                ? prevActiveButtons.filter(buttonIndex => buttonIndex !== index) 
                : [...prevActiveButtons, index]
        );
    };
    
  return (
      <div className="alarm-screen">
        <div className='alarm-top'>
            <div className="StatusBar"></div>
            <div className="appbar">
                <img src={backIconBlack} alt="Back Icon Black" className="back-icon-black-image" />
                <p className="inner-appbar">알람 설정</p>
            </div>
        </div>
        <div className="alarm-content">
            <div className='choose-day-content'>
                <div className='choose-day'>
                    요일 선택
                </div>
                <div className='day'>
                {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                            <button
                                key={index}
                                className={`day-button ${activeButtons.includes(index) ? 'active' : ''}`}
                                onClick={() => handleButtonClick(index)}
                            >
                                {day}
                            </button>
                        ))}
                </div>
            </div>
            <div className='time-content'>
                <div className='choose-time'>
                시간설정
                </div>
                <div className='select-from'></div>
            </div>
          </div>
      </div>    
  );
};

export default AlarmPageOne;