import React from "react";


function Calendar() {



    return(
        <div className="Container">
            <div className="appBar">
                <i class="ri-arrow-left-s-line"></i>
                <p>잔디심기</p>
            </div>
            <div className="withTime">
                <img id="CalendarImg" src={`${process.env.PUBLIC_URL}/calendar_img.png`} alt="" />
                <div className="timeBox">
                    <p>님이<br/>핏 마인더와 함께한 시간</p>
                    <div id="withDate">
                        <img src={`${process.env.PUBLIC_URL}/alarm.png`} alt="" />
                        <p>일</p>
                    </div>
                </div>
            </div>
            <div className="timeBox">
                <p>님이<br/>핏 마인더와 함께한 시간</p>
                <div id="withGrass">
                    <img src={`${process.env.PUBLIC_URL}/grass.png`} alt="" />
                    <p>개</p>
                </div>
            </div>
        </div> 
    )
}

export default Calendar;