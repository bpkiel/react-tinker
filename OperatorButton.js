import React, { useState } from 'react';

const OperatorButton = ({ operator, operatorClass, handleButtonClick }) => {
    return (
        <button
            className={`operator-btn ${operatorClass}`}
            onClick={handleButtonClick}
        >
            {operator}
        </button>
    )
};

export default OperatorButton;