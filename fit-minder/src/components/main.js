import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import AlarmPageOne from './Alarm/AlarmPage-one';
import Calendar from "./calendar";
import StretchingChoosePage from './Stretching-choose/Stretching-choose-page';

function Main() {
    const myRef = useRef();
    const [data, setData] = useState([]);
    const [isDown, setIsDown] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        startX.current = e.pageX - myRef.current.offsetLeft;
        scrollLeft.current = myRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - myRef.current.offsetLeft;
        const walk = (x - startX.current) * 3;
        myRef.current.scrollLeft = scrollLeft.current - walk;
    };

    useEffect(() => {
        fetch("https://like-fit.p-e.kr/api/v1/members/1/week-grass")
            .then(response => response.json())
            .then(data => {
                if (data.grassList) {
                    setData(data.grassList);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    useEffect(() => {
        const toolbarTitleElement = document.querySelector('.fc-toolbar-title');
        if (toolbarTitleElement) {
            const customText = document.createElement('p');
            customText.textContent = '님이 이번 주 심은 잔디에요!';
            customText.style.textAlign = 'center';
            customText.style.margin = '0';
            customText.style.fontSize = '22px';
            customText.style.fontWeight = '600';
            customText.style.width = '165px';
            customText.style.textAlign = 'start';
            toolbarTitleElement.parentElement.insertAdjacentElement('afterend', customText);
        }
    }, []);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://like-fit.p-e.kr/api/v1/members/1/month-grass")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data);
                if (data.grassList) {
                    const eventsWithImages = data.grassList.map(event => ({
                        title: "이벤트 생성", // 이벤트 제목 설정
                        start: event.grassDate, // 시작 날짜
                        extendedProps: {
                            imageUrl: `${process.env.PUBLIC_URL}/grass.png` // 이벤트 이미지 URL 설정
                        }
                    }));
                    console.log("Events with Images:", eventsWithImages);
                    setEvents(eventsWithImages);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => console.error("Error fetching events data:", error));
    }, []);

    const renderEventContent = (eventInfo) => {
        return (
            <div>
                <span>{eventInfo.event.title}</span>
                <img src={eventInfo.event.extendedProps.imageUrl} alt="Grass" style={{ width: '26px', height: '22px', marginLeft: '4px' }} />
            </div>
        );
    };

    return (
        <div className="Container">
            <div className="MainHeader">
                <div className="Header">
                    <p>FITMINDER</p>
                    <div className={`Nav ${navVisible ? 'change' : ''}`} onClick={toggleNav}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div className={`NavContainer ${navVisible ? 'visible' : ''}`}>
                        <Link to='/alarmpage-one' className="NavContainerLink" >알림 설정</Link>
                        <Link to='/stretching-choose-page' className="NavContainerLink" >스트레칭</Link>
                        <Link to='/calendar' className="NavContainerLink" >잔디 캘린더</Link>
                    </div>
                </div>

                <button className="AlarmBtn">
                    <Link to='/alarmpage-one' id="AlarmLink">
                        알람 설정 바로가기
                    </Link>
                    <img src={`${process.env.PUBLIC_URL}/alarm.png`} alt="" />
                </button>
                <div className="HeaderMid">
                    <p id="HeaderCtx"><strong>님,</strong> 오늘 하루도<br />
                        건강하게 보내봐요</p>
                    <img id="HeaderImg" src={`${process.env.PUBLIC_URL}/header_img.png`} alt="" />
                </div>
                <Link to="/stretching-choose-page" id='StretchStrLink'>
                    <button className="StretchStr">
                        <p>스트레칭 시작하기</p>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </Link>
            </div>
            <div className="StretchIdx">
                <div id="StretchText">
                    <p>즐겨찾는 스트레칭</p>
                </div>
                <div className="StretchContainer"
                    ref={myRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}>
                    <div className="StretchCtx" ref={myRef}>
                        <i className="ri-bookmark-fill"></i>
                        {data.map((item, index) => (
                            <div key={index} className="StretchBox">
                                <h3>{item.stretchName}</h3>
                                <p>{item.stretchCtx}</p>
                                <div className="StretchTime">{item.stretchTime}</div>
                                <img className={item.stretchIcon} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="Calendar">
                <img id="CalendarImg" src={`${process.env.PUBLIC_URL}/calendar_img.png`} alt="" />
                <div className="WeeklyCalendar">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridWeek"
                        locales={[koLocale]}
                        locale="ko"
                        events={events}
                        headerToolbar={{
                            right: '',
                        }}
                        eventContent={renderEventContent}
                        dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
                    />
                    <Link to='/calendar' id="weeklyCalendarLink">
                        <div className="weeklyCalendarLink">
                            <p>자세히 보기</p>
                            <i className="ri-arrow-right-s-line"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/alarmpage-one" element={<AlarmPageOne />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/stretching-choose-page" element={<StretchingChoosePage />} />
            </Routes>
        </div>
    );
}

export default Main;
