import React , { useEffect, useRef, useState } from "react";

function Main() {


    //스트레칭 즐겨찾기 함수
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
        // 데이터 패치 (스프링 백엔드에서 받아오기)
        fetch("/api/stretchData") // 스프링 백엔드의 엔드포인트
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <div className="Container">
            <div className="MainHeader">
                <div className="Header">
                    <p>FITMINDER</p>
                    <div className={`Nav ${navVisible ? 'change' : ''}`}  onClick={toggleNav}>
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
                    <p id="HeaderCtx" ><strong>님,</strong> 오늘 하루도<br/>
                        건강하게 보내봐요</p>
                    <img id="HeaderImg" src={`${process.env.PUBLIC_URL}/header_img.png`} alt="" />
                </div>
                <button className="StretchStr">
                    <p>스트레칭 시작하기</p>
                    <i class="ri-arrow-right-s-line"></i>
                </button>
            </div>
            <div className="StretchIdx">
                <div id="StretchText">
                    <p>즐겨찾는 스트레칭</p>
                    <button><p>더보기</p><i class="ri-arrow-right-s-line"></i></button>
                </div>
                <div className="StretchContainer"
                ref={myRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>
                    <div className="StretchCtx" ref={myRef}>
                        <i class="ri-bookmark-fill"></i>
                        {data.map((item, index) => (
                            <div key={index} className="StretchBox">
                                <h3>{item.stretchName}</h3>
                                <p>{item.stretchCtx}</p>
                                <div className="StretchTime">{item.stretchTime}</div>
                                <img className={item.stretchIcon}/>
                            </div>
                            ))}
                    </div>
                </div>    
            </div>
            <div className="Calendar">
                <img id="CalendarImg" src={`${process.env.PUBLIC_URL}/calendar_img.png`} alt="" />
                <div className="WeeklyCalendar">
                    <p>날짜</p>
                </div>
            </div>
        </div>

    )
}


export default Main;