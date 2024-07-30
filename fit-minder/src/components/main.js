import React from "react";


function Main() {

        return (
            <div className="container">
                <div className="MainHeader">
                    <div className="Header">
                        <p>FITMINDER</p>
                        <div className="Nav">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <button className="AlarmBtn">
                        <p>알람 설정 바로가기</p>
                        <img src={`${process.env.PUBLIC_URL}/alarm.png`} alt="" />
                    </button>
                    <p id="HeaderCtx" ><strong>님,</strong> 오늘 하루도<br/>
                        건강하게 보내봐요</p>
                    <img id="HeaderImg" src={`${process.env.PUBLIC_URL}/header_img.png`} alt="" />
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
                </div>
            </div>
        )};


export default Main;