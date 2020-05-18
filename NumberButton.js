import React from 'react';

const NumberButton = ({zeroClass, number, handleButtonClick}) => {
    return (
        <button
            className={`number-btn ${zeroClass}`}
            onClick={handleButtonClick}
        >
            {number}
        </button>
    )
};

export default NumberButton;