// LanguageButtons.js
import React from 'react';
import ColorSelector from './ColorSelector';
import FontSizeSelector from './FontSizeSelector';

const LanguageButtons = ({ setLanguage, language, setInputValue, selectedColor, setSelectedColor, setTextColor, selectedFontSize, setSelectedFontSize, setFontSize }) => {
    const handleClear = () => {
        setInputValue([]);
    };

    const handleDelete = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className='language-buttons'>
            <button className='btn btn-danger' onClick={handleClear}>
                ניקוי
            </button>
            <button className='btn btn-danger' onClick={handleDelete}>
                מחיקה
            </button>
            <button
                className={`btn ${language === 'englishLower' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleLanguageChange('englishLower')}
            >
                אנגלית קטנות
            </button>
            <button
                className={`btn ${language === 'englishUpper' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleLanguageChange('englishUpper')}
            >
                אנגלית גדולות
            </button>
            <button
                className={`btn ${language === 'hebrew' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleLanguageChange('hebrew')}
            >
                עברית
            </button>

        </div>
    );
};

export default LanguageButtons;
