import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const StretchingTimer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { timerDuration = 0, nextPage = '/' } = location.state || {};

    console.log('StretchingTimer 렌더링됨');
    console.log(`타이머 기간: ${timerDuration}ms`);
    console.log(`다음 페이지: ${nextPage}`);

    useEffect(() => {
        if (timerDuration) {
            console.log('타이머 시작');
            const timer = setTimeout(() => {
                console.log('타이머 완료, 페이지 이동');
                navigate(nextPage);
            }, timerDuration);

            return () => {
                console.log('타이머 정리');
                clearTimeout(timer);
            };
        }
    }, [navigate, nextPage, timerDuration]);

    return (
        <div>
            <p>타이머: {timerDuration / 1000}초</p>
            <p>다음 페이지로 이동 중...</p>
        </div>
    );
};

export default StretchingTimer;
