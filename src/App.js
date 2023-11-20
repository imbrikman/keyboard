// VirtualKeyboard.js
import React, { useState } from 'react';
import KeyboardInput from './KeyboardInput';
import LanguageButtons from './LanguageButtons';
import ColorSelector from './ColorSelector';
import FontSizeSelector from './FontSizeSelector';
import KeyContainer from './KeyContainer';

import './App.css';

const VirtualKeyboard = () => {
    const [inputValue, setInputValue] = useState([]);
    const [language, setLanguage] = useState('hebrew');
    const [selectedColor, setSelectedColor] = useState('blue');
    const [textColor, setTextColor] = useState('blue');
    const [selectedFontSize, setSelectedFontSize] = useState('20');
    const [fontSize, setFontSize] = useState('20');

    const handleKeyClick = (key) => {
        setInputValue((prevValue) => [
            ...prevValue,
            <span key={prevValue.length} style={{ color: textColor, fontSize: Number(fontSize) }}>
                {key}
            </span>,
        ]);
    };

    return (
        <div id='virtual-keyboard'>
            <KeyboardInput inputValue={inputValue} />
            <LanguageButtons setLanguage={setLanguage} language={language} setInputValue={setInputValue} setSelectedColor={setSelectedColor} />
            <ColorSelector
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                setTextColor={setTextColor}
            />
            <FontSizeSelector
                selectedFontSize={selectedFontSize}
                setSelectedFontSize={setSelectedFontSize}
                setFontSize={setFontSize}
            />
            <button onClick={(inputValue) => {

                setInputValue((prevInputValue) => {
                    const newStyle = {
                        color: textColor,
                        fontSize: Number(fontSize),
                    };

                    const styledText = prevInputValue.map((char, index) => (
                        <span key={index} style={newStyle}>
                            {char.props.children.toString()}
                        </span>
                    ));

                    return styledText;
                });
            }} >
                עדכן שינויים על כל הטקסט
            </button>
            <KeyContainer language={language} handleKeyClick={handleKeyClick} />
        </div>
    );
};

export default VirtualKeyboard;
