import React, { useEffect, useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';

function Main() {
    // 스트레칭 즐겨찾기 함수
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
        const walk = (x - startX.current) * 3; // 스크롤 속도 조절
        myRef.current.scrollLeft = scrollLeft.current - walk;
    };

    useEffect(() => {
        // 데이터 패치 (스프링 백엔드에서 받아오기) 즐겨찾기한 스트레칭 정보
        fetch("/api/stretchData") // 스프링 백엔드의 엔드포인트
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    useEffect(() => {
        // 툴바와 캘린더 사이에 문구 삽입하는 로직
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
        // 백엔드에서 캘린더 잔디심기 이벤트 데이터 가져오기
        fetch("/api/eventsData") // 스프링 백엔드의 엔드포인트
            .then(response => response.json())
            .then(data => {
                // 가져온 데이터에 이미지 URL 추가
                const eventsWithImages = data.map(event => ({
                    ...event,
                    imageUrl: `${process.env.PUBLIC_URL}/grass.png` // 모든 이벤트 잔디 img로 표시
                }));
                setEvents(eventsWithImages);
            })
            .catch(error => console.error("Error fetching events data:", error));
    }, []);

    const renderEventContent = (eventInfo) => {
        return (
            <div>
                <img src={eventInfo.event.extendedProps.imageUrl} alt="" style={{ width: '26px', height: '22px'}} />
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
                        <a href="#">알림 설정</a>
                        <a href="#">스트레칭</a>
                        <a href="#">잔디 캘린더</a>
                    </div>
                </div>

                <button className="AlarmBtn">
                    <p>알람 설정 바로가기</p>
                    <img src={`${process.env.PUBLIC_URL}/alarm.png`} alt="" />
                </button>
                <div className="HeaderMid">
                    <p id="HeaderCtx"><strong>님,</strong> 오늘 하루도<br />
                        건강하게 보내봐요</p>
                    <img id="HeaderImg" src={`${process.env.PUBLIC_URL}/header_img.png`} alt="" />
                </div>
                <button className="StretchStr">
                    <p>스트레칭 시작하기</p>
                    <i className="ri-arrow-right-s-line"></i>
                </button>
            </div>
            <div className="StretchIdx">
                <div id="StretchText">
                    <p>즐겨찾는 스트레칭</p>
                    <button><p>더보기</p><i className="ri-arrow-right-s-line"></i></button>
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
                        locales={[koLocale]}  // 로케일 설정
                        locale="ko"
                        events={events}
                        headerToolbar={{
                            right: '',
                        }}
                        eventContent={renderEventContent} // 이벤트 렌더링 함수 추가
                        dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
