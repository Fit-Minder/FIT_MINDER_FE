import React, { useState, useEffect } from "react";
import {Link, Route, Routes } from 'react-router-dom';
import Main from "./main";
import ReactCalendar from "react-calendar";
import axios from 'axios';



function Calendar() {
    const [events, setEvents] = useState([]);
    const [memberName, setMemberName] = useState('');
    const [withTime, setWithTime] = useState(0);
    const [grassCount, setGrassCount] = useState(0);

    useEffect(() => {
        // 백엔드에서 이벤트 데이터를 가져오는 함수
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://like-fit.p-e.kr/api/v1/members/1/month-grass'); // API 엔드포인트에 맞게 수정
                const data = response.data;

                setMemberName(data.memberName);
                setWithTime(data.withTime);
                setGrassCount(data.grassCount);

                const eventsWithDates = data.grassList.map(event => ({
                    date: new Date(event.grassDate)
                }));
                console.log(data);
                setEvents(eventsWithDates);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        
        fetchEvents();
    }, []);

    const formatDay = (locale, date) => date.getDate();

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const eventDates = events.map(event => event.date.toDateString());
            if (eventDates.includes(date.toDateString())) {
                return 'highlight';
            }
        }
        return null;
    };

    useEffect(() => {
        const disableButton = () => {
            const button = document.querySelector('.react-calendar__navigation__label');
            if (button) {
                button.classList.add('disabled-button');
                button.disabled = true; // 완전히 비활성화
            }
        };

        disableButton();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 함

    return (
        <div className="Container">
            <div className="appBar">
                <Link to='/main' id="appBarLink"><i className="ri-arrow-left-s-line"></i></Link>
                <p>잔디심기</p>
            </div>
            <div className="withTime">
                <img id="CalendarImg" src={`${process.env.PUBLIC_URL}/calendar_img.png`} alt="" />
                <div className="timeBox">
                    <p id="timeBoxText">{memberName}님이<br />핏 마인더와 함께한 시간</p>
                    <div id="withDate">
                        <img src={`${process.env.PUBLIC_URL}/alarm.png`} alt="" />
                        <p>{withTime}일</p>
                    </div>
                </div>
            </div>
            <div className="timeBox">
                <p>{memberName}님이<br />핏 마인더와 함께한 시간</p>
                <div id="withGrass">
                    <img src={`${process.env.PUBLIC_URL}/grass.png`} alt="" />
                    <p>{grassCount}개</p>
                </div>
            </div>
            <div className="calendarWrapper">
                <ReactCalendar
                    formatDay={formatDay}
                    tileClassName={tileClassName}
                />
            </div>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>
    );
}

export default Calendar;