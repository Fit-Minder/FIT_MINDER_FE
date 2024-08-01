import React, { useState } from 'react';
import './Stretching-choose-page.css';
import backIconBlack from '../../assets/images/icon-back-black.png';
import wristIcon from '../../assets/images/wrist-icon.png';
import eyeIcon from '../../assets/images/eye-icon.png';
import neckIcon from '../../assets/images/neck-icon.png';
import shoulderIcon from '../../assets/images/shoulder-icon.png';
import showIcon from '../../assets/images/show-icon.png';

function StretchingChoosePage() {

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelectedCheckboxes((prevSelectedCheckboxes) =>
            prevSelectedCheckboxes.includes(index)
                ? prevSelectedCheckboxes.filter((i) => i !== index)
                : [...prevSelectedCheckboxes, index]
        );
    };

    const icons = [wristIcon, eyeIcon, neckIcon, shoulderIcon];
    const options = ['손목 스트레칭', '눈 스트레칭', '목 스트레칭', '어깨 스트레칭'];
    
  return (
    <div className="stretching-choose-screen">
    <div className='stretching-choose-top'>
        <div className="StatusBar"></div>
        <div className="appbar">
            <img src={backIconBlack} alt="Back Icon Black" className="back-icon-black-image" />
            <p className="inner-appbar">스트레칭</p>
        </div>
        <div className='stretching-choose-content'>
                    <div className='stretching-part-choose-text'>스트레칭할 부위를 모두 선택하세요</div>
                    <div className='part-choose-checkbox-container'>
                        {options.map((option, index) => (
                            <div className="checkbox-button-container" key={index}>
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
                                    <div className='show-icon-container'>
                                    <img src={showIcon} alt="Show icon" className="icon show-icon" />
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
        </div>
    </div>
    </div>
  );
};

export default StretchingChoosePage;