/*
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FinalizeStretching() {
  const location = useLocation();
  const { selectedCheckboxes } = location.state || { selectedCheckboxes: [] };

  const postStretchingCompletion = async () => {
    const memberId = 'user123'; // 실제 사용자 ID로 교체
    const url = `https://example.com/api/members/${memberId}/grass`; // 업데이트된 API 경로

    const data = {
      memberId, // 사용자 ID
      completedExercises: selectedCheckboxes || [] // 체크박스 배열이 undefined인 경우 빈 배열로 설정
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
*/


/* length 에러 수정 전
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FinalizeStretching() {
  const location = useLocation();
  const { selectedCheckboxes } = location.state || { selectedCheckboxes: [] };

  // postStretchingCompletion 함수가 selectedCheckboxes가 배열인지 확인
  const postStretchingCompletion = async () => {
    const url = `https://example.com/members/${memberId}/grass`; // 서버 URL
    const data = {
      userId: 'user123', // 사용자 ID
      completedExercises: Array.isArray(selectedCheckboxes) ? selectedCheckboxes : []
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

      // 네비게이션을 제거하여 페이지에 머물도록 합니다.
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
*/

/* main 이동경로 추가
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function FinalizeStretching() {
  const location = useLocation();
  const { selectedCheckboxes } = location.state || { selectedCheckboxes: [] };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const memberId = 'user123'; // 실제 사용자 ID로 교체

  const postStretchingCompletion = async () => {
    const url = `https://example.com/members/${memberId}/grass`; // 서버 URL
    const data = {
      userId: memberId, // 사용자 ID
      completedExercises: Array.isArray(selectedCheckboxes) ? selectedCheckboxes : []
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
      setLoading(false);

    } catch (error) {
      console.error('Fetch error:', error);
      setError('서버와 통신 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  useEffect(() => {
    postStretchingCompletion();
  }, []);

  if (loading) {
    return <div>스트레칭이 완료되었습니다. 결과를 서버에 전송 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>스트레칭 결과가 서버에 성공적으로 전송되었습니다.</p>
    </div>
  );
}

export default FinalizeStretching;
*/

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
