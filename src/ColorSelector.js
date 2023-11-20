import React from 'react';

const ColorSelector = ({ selectedColor, setSelectedColor, setTextColor }) => {
    const colorOptions = ['blue', 'red', 'green', 'purple', 'bleak', 'orange'];

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setTextColor(color);
    };

    return (
        <div>
            <select
                id="colorSelector"
                value={selectedColor}
                onChange={(e) => handleColorChange(e.target.value)}
            >
                {colorOptions.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>
            <label htmlFor="colorSelector"> :בחר צבע גופן </label>
        </div>
    );
};

export default ColorSelector;
