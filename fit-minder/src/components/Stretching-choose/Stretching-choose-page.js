import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './Stretching-choose-page.css';
import Main from '../main';
import backIconBlack from '../../assets/images/icon-back-black.png';
import wristIcon from '../../assets/images/wrist-icon.png';
import eyeIcon from '../../assets/images/eye-icon.png';
import neckIcon from '../../assets/images/neck-icon.png';
import shoulderIcon from '../../assets/images/shoulder-icon.png';
import showIcon from '../../assets/images/show-icon.png';
import wristExplanation from '../../assets/images/wrist-explanation.png';
import eyeExplanation from '../../assets/images/eye-explanation.png';
import neckExplanation from '../../assets/images/neck-explanation.png';
import shoulderExplanation from '../../assets/images/shoulder-explanation.png';
import saveBefore from '../../assets/images/save-before.png';
import saveAfter from '../../assets/images/save-after.png';

const options = ['손목 스트레칭', '눈 스트레칭', '목 스트레칭', '어깨 스트레칭'];
const icons = [wristIcon, eyeIcon, neckIcon, shoulderIcon];
const timers = [60000, 20000, 14000, 60000]; // 각 스트레칭의 타이머 (밀리초 단위)
const routes = ['/wriststretching', '/eyestretching', '/neckstretching', '/shoulderstretching'];

const expandedContents = [
    {
        title: '손목 스트레칭 해야하는 이유',
        description: '현대인의 생활 방식은 장시간의 컴퓨터 사용과 스마트폰 사용으로 인해 목과 어깨에 많은 긴장을 주게 됩니다. 목 돌리기 운동은 이러한 긴장을 완화시키는 데 효과적입니다. 이 운동은 근육을 이완시키고, 긴장을 풀어줍니다.',
        image: wristExplanation,
        saveImage: saveBefore
    },
    {
        title: '눈 스트레칭 해야하는 이유',
        description: '화면을 오래 보게 되면 눈의 피로가 쌓입니다. 눈 스트레칭은 눈의 피로를 풀어주고 시력을 보호하는 데 도움을 줍니다.',
        image: eyeExplanation,
        saveImage: saveBefore
    },
    {
        title: '목 돌리기 해야하는 이유',
        description: '목 돌리기 운동은 목 주변의 근육을 이완시키고, 긴장을 완화시키며, 목 통증을 줄이는 데 도움을 줍니다.',
        image: neckExplanation,
        saveImage: saveBefore
    },
    {
        title: '어깨 스트레칭 해야하는 이유',
        description: '어깨 스트레칭은 어깨와 상체의 긴장을 풀어주고, 유연성을 높이며, 통증을 줄이는 데 효과적입니다.',
        image: shoulderExplanation,
        saveImage: saveBefore
    }
];

const memberId = '1'; // 실제 사용자 ID로 대체

async function updateFavoriteStretching(stretchingId, isFavorite) {
    const url = `https://like-fit.p-e.kr/api/v1/members/1/like/${stretchingId}`; // 서버 URL

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isFavorite }) // 서버에 전송할 데이터
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Server response:', result);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function StretchingChoosePage() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [savedStates, setSavedStates] = useState(Array(options.length).fill(false));
    const navigate = useNavigate();

    const handleCheckboxChange = (index) => {
        if (selectedCheckboxes.includes(index)) {
            setSelectedCheckboxes(selectedCheckboxes.filter(i => i !== index));
        } else {
            setSelectedCheckboxes([...selectedCheckboxes, index]);
        }
    };

    const handleShowIconClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleSaveImageClick = async (index) => {
        const updatedStates = [...savedStates];
        updatedStates[index] = !updatedStates[index];
        setSavedStates(updatedStates);

        const stretchingId = index + 1; // stretchingId를 1부터 시작하도록 설정 (서버와 맞추기 위해)
        await updateFavoriteStretching(stretchingId, updatedStates[index]);
    };

    const handleStartStretching = () => {
        if (selectedCheckboxes.length > 0) {
            const stretchingQueue = selectedCheckboxes.map(index => ({
                page: routes[index],
                duration: timers[index]
            }));
            navigate(stretchingQueue[0].page, { state: { timerDuration: stretchingQueue[0].duration, nextIndex: 0, stretchingQueue } });
        }
    };

    return (
        <div className="stretching-choose-screen">
            <div className='stretching-choose-top'>
                <div className="StatusBar"></div>
                <div className="appbar">
                    <Link to='/main' className="back-icon-black-image"><img src={backIconBlack} alt="Back Icon Black" /></Link>
                    <p className="inner-appbar">스트레칭</p>
                </div>
                <div className='stretching-choose-content'>
                    <div className='stretching-part-choose-text'>스트레칭할 부위를 모두 선택하세요</div>
                    <div className='part-choose-checkbox-container'>
                        {options.length > 0 ? (
                            options.map((option, index) => (
                                <div className={`checkbox-button-container ${expandedIndex === index ? 'expanded' : ''}`} key={index}>
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${index}`}
                                        name="custom-checkbox"
                                        className="checkbox-button"
                                        checked={selectedCheckboxes.includes(index)}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <label htmlFor={`checkbox-${index}`} className="custom-checkbox-button">
                                        <div className="text-icon">
                                            <img src={icons[index]} alt={`${option} icon`} className="icon part-icon" />
                                            {option}
                                        </div>
                                        <img
                                            src={showIcon}
                                            alt="Show icon"
                                            className={`show-icon ${expandedIndex === index ? 'rotated' : ''}`}
                                            onClick={() => handleShowIconClick(index)}
                                        />
                                    </label>
                                    <div className={`hidden-content ${expandedIndex === index ? 'show' : ''}`}>
                                        <img
                                            src={savedStates[index] ? saveAfter : saveBefore}
                                            alt={`${option} 즐겨찾기 이미지`}
                                            className="save-image"
                                            onClick={() => handleSaveImageClick(index)}
                                        />
                                        <img src={expandedContents[index].image} alt={`${option} 설명 이미지`} className="content-image" />
                                        <p className="content-title">{expandedContents[index].title}</p>
                                        <p className="content-description">{expandedContents[index].description}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                        <div className='alarm-bottom-section'>
                            <button onClick={handleStartStretching} className='stretching-start-button'>스트레칭 시작</button>
                        </div>
                    </div>
                </div>
            </div>
        <Routes>            {/*경로 수정!*/}
            <Route path="/main" element={<Main />} />
        </Routes>
    </div>
  );
};

export default StretchingChoosePage;