import React, { useState } from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import Main from "../main";
import './Stretching-choose-page.css';
import backIconBlack from '../../assets/images/icon-back-black.png';
import wristIcon from '../../assets/images/wrist-icon.png';
import eyeIcon from '../../assets/images/eye-icon.png';
import neckIcon from '../../assets/images/neck-icon.png';
import shoulderIcon from '../../assets/images/shoulder-icon.png';
import showIcon from '../../assets/images/show-icon.png';
import wristExplanation from '../../assets/images/wrist-explanation.png'
import eyeExplanation from '../../assets/images/eye-explanation.png'
import neckExplanation from '../../assets/images/neck-explanation.png'
import shoulderExplanation from '../../assets/images/shoulder-explanation.png'
import saveBefore from '../../assets/images/save-before.png'
import saveAfter from '../../assets/images/save-after.png'



const options = ['손목 스트레칭', '눈 스트레칭', '목 스트레칭', '어깨 스트레칭'];
const icons = [wristIcon, eyeIcon, neckIcon, shoulderIcon];
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


function StretchingChoosePage() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [savedStates, setSavedStates] = useState(Array(options.length).fill(false)); // 저장 상태 관리

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

    const handleSaveImageClick = (index) => {
        const updatedStates = [...savedStates];
        updatedStates[index] = !updatedStates[index]; // 클릭 시 상태 토글
        setSavedStates(updatedStates);
    };
    
  return (
    <div className="stretching-choose-screen">
        <div className='stretching-choose-top'>
            <div className="StatusBar"></div>
            <div className="appbar">
                <Link to='/main' className="back-icon-black-image"><img src={backIconBlack} alt="Back Icon Black"  /></Link>
                <p className="inner-appbar">스트레칭</p>
            </div>
            <div className='stretching-choose-content'>
                <div className='stretching-part-choose-text'>스트레칭할 부위를 모두 선택하세요</div>
                    <div className='part-choose-checkbox-container'>
                    {options.map((option, index) => (
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
                                            className={`icon show-icon ${expandedIndex === index ? 'rotated' : ''}`}
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
                            ))}
                    </div>
            </div>
        </div>
        <div className='alarm-bottom-section'>
            <Link to='' className='stretching-start-button'><button>스트레칭 시작</button></Link>
        </div>  
        <Routes>            {/*경로 수정!*/}
            <Route path="/main" element={<Main />} />
        </Routes>
    </div>
  );
};

export default StretchingChoosePage;