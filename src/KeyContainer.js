import React from 'react';

const KeyContainer = ({ language, handleKeyClick }) => {
    const calculateCharRange = (language) => {
        switch (language) {
            case 'hebrew':
                return { start: 1488, end: 1514 };
            case 'englishUpper':
                return { start: 65, end: 90 };
            case 'englishLower':
                return { start: 97, end: 122 };
            default:
                return { start: 1488, end: 1514 }; // Default to Hebrew
        }
    };

    const renderKeys = () => {
        const { start, end } = calculateCharRange(language);
        const characters = [];

        const space = String.fromCharCode(32);
        characters.unshift(
            <button
            key={space}
                className='key btn btn-light'
                onClick={() => handleKeyClick(`\u00A0`)}
            >
                רווח
            </button>
        );
        for (let asciiValue = end; asciiValue >= start; asciiValue--) {
            const character = String.fromCharCode(asciiValue);
            characters.unshift(
                <button
                    key={character}
                    className='key btn btn-light'
                    onClick={() => handleKeyClick(character)}
                >
                    {character}
                </button>
            );
        }
        return <div className='key-container'>{characters}</div>;
    };
    return <>{renderKeys()}</>;
};

export default KeyContainer;
