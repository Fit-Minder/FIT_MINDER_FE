import React, {useEffect} from 'react';



function First() {

  const kakaoRedirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const naverRedirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI;

  return (
    <div className="Container">
        <div className="MainLogo">
            <h1>내 몸에 딱 맞는<br/>간단 스트레칭 서비스</h1>
            <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="" />
        </div>
        <div className="Main">
            <div className="MainText">
                <p>3초만에 시작하기</p>
                <img src={`${process.env.PUBLIC_URL}/locket.svg`} alt="" />
            </div>
            <div className="MainLogin">
                <a href="https://like-fit.p-e.kr/oauth2/authorization/kakao"><img src={`${process.env.PUBLIC_URL}/kakaotalk.png`} alt="" /></a>
                <a href="https://like-fit.p-e.kr/oauth2/authorization/google"><img src={`${process.env.PUBLIC_URL}/google.png`} alt="" /></a>
                <a href="https://like-fit.p-e.kr/oauth2/authorization/naver"><img src={`${process.env.PUBLIC_URL}/naver.svg`} alt="" /></a>
            </div>
        </div>
    </div>
)}
export default First;


