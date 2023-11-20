import React from 'react';

const FontSizeSelector = ({ selectedFontSize, setSelectedFontSize, setFontSize }) => {
    const fontSizeOptions = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'];

    const handleFontSizeChange = (fontSize) => {
        setSelectedFontSize(fontSize);
        setFontSize(fontSize);
    };

    return (
        <div>
            <select
                id="fontSizeSelector"
                value={selectedFontSize}
                onChange={(e) => handleFontSizeChange(e.target.value)}
            >
                {fontSizeOptions.map((fontSize) => (
                    <option key={fontSize} value={fontSize}>
                        {fontSize}
                    </option>
                ))}
            </select>
            <label htmlFor="fontSizeSelector">  :בחר גודל גופן  </label>
        </div>
    );
};

export default FontSizeSelector;
