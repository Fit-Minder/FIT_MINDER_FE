import React, { useState } from 'react';
import './AlarmPage-one.css';
import backIconBlack from '../../assets/images/icon-back-black.png';


function AlarmPageOne() {
    const [activeButtons, setActiveButtons] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState("");

    const handleButtonClick = (index) => {
        setActiveButtons((prevActiveButtons) => 
            prevActiveButtons.includes(index) 
                ? prevActiveButtons.filter(buttonIndex => buttonIndex !== index) 
                : [...prevActiveButtons, index]
        );
    };

    const handleNumberChange = (event) => {
        setSelectedNumber(event.target.value);
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
                <div className='choose-time'>시간설정</div>
                <div className='select-from'>
                <select className='custom-select'>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={i}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> <span className='text-from'> 부터</span>
                </div>
                <div className='select-to'>
                <select className='custom-select'>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={i}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> <span className='text-to'> 까지</span>
                </div>
            </div>
            <div className='alarm-repeat-content'>
                <div className='alarm-repeat'>알람 반복</div>
                    <div className='select-alarm-container'>
                        <div className='select-alarm-times'>
                            <select className='custom-select' value={selectedNumber} onChange={handleNumberChange}>
                                    <option value="">0회</option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                        </div>
                        <div className='select-alarm-time'>
                            <select className='custom-select'>
                                    <option value="">00:00</option>
                                    {Array.from({ length: 24 }, (_, i) => (
                                        <option key={i} value={i}>{`${i.toString().padStart(2, '0')}:00`}</option>
                                    ))}
                            </select> <span className='text-repeat'> 마다 반복</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className='alarm-bottom-section'>
            <button className='cta-ok-button'>완료</button>
        </div>
    </div>  
  );
};

export default AlarmPageOne;