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
    // 스트레칭 즐겨찾기 함수
    const myRef = useRef();
    const [data, setData] = useState([]);
    const [isDown, setIsDown] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [fetchError, setFetchError] = useState(null);

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
        const walk = (x - startX.current) * 3; // 스크롤 속도 조절
        myRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // 즐겨찾기 데이터를 백엔드에서 가져오는 함수
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching favorites data...");
                const response = await fetch("https://like-fit.p-e.kr/api/v1/members/1/like"); // API 엔드포인트 수정
                console.log("Response status:", response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Favorites data:", data);
                setData(data);
            } catch (error) {
                console.error("Error fetching favorites data:", error);
                setFetchError("즐겨찾기 데이터를 불러오는 중 오류가 발생했습니다.");
            }
        };

        fetchData();
    }, []);

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    const [memberName, setMemberName] = useState('');

    useEffect(() => {
        // 백엔드에서 멤버 이름을 받아오는 가정
        const fetchMemberName = async () => {
            try {
                console.log("Fetching member name...");
                const response = await fetch("https://like-fit.p-e.kr/api/v1/members/1/week-grass");
                console.log("Response status:", response.status);
                const data = await response.json();
                console.log("Member data:", data);
                if (data.memberName) {
                    setMemberName(data.memberName); // 백엔드에서 받은 멤버 이름을 상태에 저장
                } else {
                    console.error("Unexpected data format:", data);
                }
            } catch (error) {
                console.error("Error fetching member name:", error);
            }
        };

        fetchMemberName();
    }, []);

    useEffect(() => {
        console.log("Member name:", memberName);
        if (memberName) {
            const toolbarTitleElement = document.querySelector('.fc-toolbar-title');
            if (toolbarTitleElement) {
                console.log("Toolbar title element found:", toolbarTitleElement);
                const customText = document.createElement('p');
                customText.textContent = `${memberName}님이 이번 주 심은 잔디에요!`;
                customText.style.textAlign = 'center';
                customText.style.margin = '0';
                customText.style.fontSize = '22px';
                customText.style.fontWeight = '600';
                customText.style.width = '165px';
                customText.style.textAlign = 'start';
                toolbarTitleElement.parentElement.insertAdjacentElement('afterend', customText);
                console.log("Custom text added:", customText.textContent);
            } else {
                console.error("Toolbar title element not found");
            }
        }
    }, [memberName]); // memberName이 변경될 때마다 실행

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://like-fit.p-e.kr/api/v1/members/1/week-grass")
            .then(response => response.json())
            .then(data => {
                console.log("Month grass data:", data);
                if (data.grassList) {
                    const eventsWithImages = data.grassList.map(event => ({
                        title: "", // 이벤트 제목 설정
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
            .catch(error => console.error("Error fetching month grass data:", error));
    }, []);

    const renderEventContent = (eventInfo) => {
        return (
            <div>
                <span>{eventInfo.event.title}</span>
                <img src={eventInfo.event.extendedProps.imageUrl} alt="Grass" style={{ width: '26px', height: '22px', marginLeft: '10px'}} className="grassImg"/>
            </div>
        );
    };

    useEffect(() => {
        // 특정 요소의 높이를 변경하는 함수
        const adjustElementHeight = () => {
            const element = document.querySelector('.fc-view-harness');
            if (element) {
                element.style.height = '75px'; // 원하는 높이로 설정
            }
        };

        adjustElementHeight();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 함


    const renderDayHeaderContent = (args) => {
        return (
            <div>
                <span>{args.date.toLocaleDateString('ko-KR', { weekday: 'short' })}</span>
                <br />
                <span>{args.date.getDate()}</span>
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
                        <Link to='/alarmpage-one' className="NavContainerLink">알림 설정</Link>
                        <Link to='/stretching-choose-page' className="NavContainerLink">스트레칭</Link>
                        <Link to='/calendar' className="NavContainerLink">잔디 캘린더</Link>
                    </div>
                </div>

                <button className="AlarmBtn">
                    <Link to='/alarmpage-one' id="AlarmLink">
                        알람 설정 바로가기
                    </Link>
                    <img src={`${process.env.PUBLIC_URL}/alarm.png`} alt="" />
                </button>
                <div className="HeaderMid">
                    <p id="HeaderCtx"><strong>{memberName}님,</strong> 오늘 하루도<br />
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
                <div className="StretchContainer" style={{ minHeight: '150px' }}
                    ref={myRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index} className="StretchCtx">
                                <i className="ri-bookmark-fill"></i>
                                <div className="StretchBox">
                                    <h3>{item.name}</h3>
                                    <p>{item.effect}</p>
                                    <div className="StretchTime">{item.durationTime}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ height: '150px' }}></div>
                    )}
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
                        events={events} // events 변수를 여기에서 사용
                        headerToolbar={{
                            right: '',
                        }}
                        eventContent={renderEventContent}
                        dayHeaderContent={renderDayHeaderContent}
                        
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
