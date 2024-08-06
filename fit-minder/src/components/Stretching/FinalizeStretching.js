import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FinalizeStretching() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCheckboxes } = location.state || { selectedCheckboxes: [] };

  const postStretchingCompletion = async () => {
    /*
    const memberId = 'user123'; // 실제 사용자 ID로 교체
    */
    const url = `https://like-fit.p-e.kr/api/v1/members/1/grass`; // 서버 URL

    const data = {
      /*
      memberId, // 사용자 ID
      */
      completedExercises: Array.isArray(selectedCheckboxes) ? selectedCheckboxes : [] // 체크박스 배열이 undefined인 경우 빈 배열로 설정
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);

      // 서버에 성공적으로 전송된 후 main 페이지로 이동
      navigate('/main');
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    postStretchingCompletion();
  }, []);

  return (
    <div>
      <p>스트레칭이 완료되었습니다. 결과를 서버에 전송 중...</p>
    </div>
  );
}

export default FinalizeStretching;
