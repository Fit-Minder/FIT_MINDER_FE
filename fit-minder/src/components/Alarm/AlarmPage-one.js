/*
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from "../main";
import './AlarmPage-one.css';
import backIconBlack from '../../assets/images/icon-back-black.png';

const memberId = '1'; // 실제 사용자 ID로 대체

const daysMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

async function updateAlarmSettings(alarmSettings) {
    const url = `https://like-fit.p-e.kr/api/v1/members/1/alarm`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(alarmSettings)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Server response:', result);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function AlarmPageOne() {
    const [activeButtons, setActiveButtons] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [intervalTime, setIntervalTime] = useState("");
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setActiveButtons((prevActiveButtons) => 
            prevActiveButtons.includes(index) 
                ? prevActiveButtons.filter(buttonIndex => buttonIndex !== index) 
                : [...prevActiveButtons, index]
        );
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleIntervalTimeChange = (event) => {
        setIntervalTime(event.target.value);
    };

    const handleComplete = async () => {
        const days = activeButtons.map(index => daysMap[index]).join(',');
        const [startHour] = startTime.split(':').map(Number);
        const [endHour] = endTime.split(':').map(Number);
        const intervalInMinutes = intervalTime ? Number(intervalTime) * 60 : 0;

        const alarmSettings = {
            days: days || '',
            startTime: {
                hour: startHour || 0,
                minute: 0,
                second: 0,
                nano: 0
            },
            endTime: {
                hour: endHour || 0,
                minute: 0,
                second: 0,
                nano: 0
            },
            intervalInMinutes: intervalInMinutes
        };

        await updateAlarmSettings(alarmSettings);
        navigate('/main');
    };

    return (
        <div className="alarm-screen">
            <div className='alarm-top'>
                <div className="StatusBar"></div>
                <div className="appbar">
                    <Link to='/main' id="appbarLink"><img src={backIconBlack} alt="Back Icon Black" className="back-icon-black-image" /></Link>
                    <p className="inner-appbar">알람 설정</p>
                </div>
            </div>
            <div className="alarm-content">
                <div className='choose-day-content'>
                    <div className='choose-day'>요일 선택</div>
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
                        <select className='custom-select' value={startTime} onChange={handleStartTimeChange}>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> 
                        <span className='text-from'> 부터</span>
                    </div>
                    <div className='select-to'>
                        <select className='custom-select' value={endTime} onChange={handleEndTimeChange}>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> 
                        <span className='text-to'> 까지</span>
                    </div>
                </div>
                <div className='alarm-repeat-content'>
                    <div className='alarm-repeat'>알람 반복</div>
                    <div className='select-alarm-container'>
                        <div className='select-alarm-time'>
                            <select className='custom-select' value={intervalTime} onChange={handleIntervalTimeChange}>
                                <option value="">00:00</option>
                                {Array.from({ length: 24 }, (_, i) => (
                                    <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                                ))}
                            </select> 
                            <span className='text-repeat'> 마다 반복</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='alarm-bottom-section'>
                <button onClick={handleComplete} className='cta-ok-button'>완료</button>
            </div>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>  
    );
}

export default AlarmPageOne;
*/

/*
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from "../main";
import './AlarmPage-one.css';
import backIconBlack from '../../assets/images/icon-back-black.png';

const memberId = '1'; // 실제 사용자 ID로 대체

const daysMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

async function updateAlarmSettings(alarmSettings) {
    const url = `https://like-fit.p-e.kr/api/v1/members/1/alarm`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(alarmSettings)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Server response:', result);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function AlarmPageOne() {
    const [activeButtons, setActiveButtons] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [intervalTime, setIntervalTime] = useState("");
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setActiveButtons((prevActiveButtons) => 
            prevActiveButtons.includes(index) 
                ? prevActiveButtons.filter(buttonIndex => buttonIndex !== index) 
                : [...prevActiveButtons, index]
        );
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleIntervalTimeChange = (event) => {
        setIntervalTime(event.target.value);
    };

    const handleComplete = async () => {
        const days = activeButtons.map(index => daysMap[index]).join(',');
        const startHour = startTime ? startTime : "00:00";
        const endHour = endTime ? endTime : "00:00";
        const intervalInMinutes = intervalTime ? parseInt(intervalTime.split(':')[1], 10) : 0;

        const alarmSettings = {
            days: days || '',
            startTime: `${startHour}:00`,
            endTime: `${endHour}:00`,
            intervalInMinutes: intervalInMinutes
        };

        console.log('Sending alarm settings:', alarmSettings);
        await updateAlarmSettings(alarmSettings);
        navigate('/main');
    };

    return (
        <div className="alarm-screen">
            <div className='alarm-top'>
                <div className="StatusBar"></div>
                <div className="appbar">
                    <Link to='/main' id="appbarLink"><img src={backIconBlack} alt="Back Icon Black" className="back-icon-black-image" /></Link>
                    <p className="inner-appbar">알람 설정</p>
                </div>
            </div>
            <div className="alarm-content">
                <div className='choose-day-content'>
                    <div className='choose-day'>요일 선택</div>
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
                        <select className='custom-select' value={startTime} onChange={handleStartTimeChange}>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> 
                        <span className='text-from'> 부터</span>
                    </div>
                    <div className='select-to'>
                        <select className='custom-select' value={endTime} onChange={handleEndTimeChange}>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> 
                        <span className='text-to'> 까지</span>
                    </div>
                </div>
                <div className='alarm-repeat-content'>
                    <div className='alarm-repeat'>알람 반복</div>
                    <div className='select-alarm-container'>
                        <div className='select-alarm-time'>
                            <select className='custom-select' value={intervalTime} onChange={handleIntervalTimeChange}>
                                {Array.from({ length: 6 }, (_, i) => (
                                    <option key={i} value={`00:${((i + 1) * 10).toString().padStart(2, '0')}`}>{`00:${((i + 1) * 10).toString().padStart(2, '0')}`}</option>
                                ))}
                            </select> 
                            <span className='text-repeat'> 마다 반복</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='alarm-bottom-section'>
                <button onClick={handleComplete} className='cta-ok-button'>완료</button>
            </div>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>  
    );
}

export default AlarmPageOne;
*/

import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from "../main";
import './AlarmPage-one.css';
import backIconBlack from '../../assets/images/icon-back-black.png';
/*
const memberId = '1'; // 실제 사용자 ID로 대체
*/
const daysMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

async function updateAlarmSettings(alarmSettings) {
    const url = `https://like-fit.p-e.kr/api/v1/members/1/alarm`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(alarmSettings)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Network response was not ok: ${errorText}`);
        }

        const result = await response.json();
        console.log('Server response:', result);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function AlarmPageOne() {
    const [activeButtons, setActiveButtons] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [intervalTime, setIntervalTime] = useState("");
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setActiveButtons((prevActiveButtons) => 
            prevActiveButtons.includes(index) 
                ? prevActiveButtons.filter(buttonIndex => buttonIndex !== index) 
                : [...prevActiveButtons, index]
        );
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleIntervalTimeChange = (event) => {
        setIntervalTime(event.target.value);
    };

    const handleComplete = async () => {
        const days = activeButtons.map(index => daysMap[index]).join(',');
        const startHour = startTime || "00:00";
        const endHour = endTime || "00:00";
        const intervalInMinutes = intervalTime ? parseInt(intervalTime.split(':')[1], 10) : 0;

        const alarmSettings = {
            days: days || '',
            startTime: `${startHour}:00`,
            endTime: `${endHour}:00`,
            intervalInMinutes: intervalInMinutes
        };

        console.log('Sending alarm settings:', alarmSettings);
        await updateAlarmSettings(alarmSettings);
        navigate('/main');
    };

    return (
        <div className="alarm-screen">
            <div className='alarm-top'>
                <div className="StatusBar"></div>
                <div className="appbar">
                    <Link to='/main' id="appbarLink"><img src={backIconBlack} alt="Back Icon Black" className="back-icon-black-image" /></Link>
                    <p className="inner-appbar">알람 설정</p>
                </div>
            </div>
            <div className="alarm-content">
                <div className='choose-day-content'>
                    <div className='choose-day'>요일 선택</div>
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
                        <select className='custom-select' value={startTime} onChange={handleStartTimeChange}>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> 
                        <span className='text-from'> 부터</span>
                    </div>
                    <div className='select-to'>
                        <select className='custom-select' value={endTime} onChange={handleEndTimeChange}>
                            <option value="">00:00</option>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>{`${i.toString().padStart(2, '0')}:00`}</option>
                            ))}
                        </select> 
                        <span className='text-to'> 까지</span>
                    </div>
                </div>
                <div className='alarm-repeat-content'>
                    <div className='alarm-repeat'>알람 반복</div>
                    <div className='select-alarm-container'>
                        <div className='select-alarm-time'>
                            <select className='custom-select' value={intervalTime} onChange={handleIntervalTimeChange}>
                                {Array.from({ length: 6 }, (_, i) => (
                                    <option key={i} value={`00:${((i + 1) * 10).toString().padStart(2, '0')}`}>{`00:${((i + 1) * 10).toString().padStart(2, '0')}`}</option>
                                ))}
                            </select> 
                            <span className='text-repeat'> 마다 반복</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='alarm-bottom-section'>
                <button onClick={handleComplete} className='cta-ok-button'>완료</button>
            </div>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>  
    );
}

export default AlarmPageOne;
