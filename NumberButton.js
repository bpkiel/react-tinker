import React from 'react';

const NumberButton = (props) => {

    return (
        // <button className='number-button'>{props.number}</button>
        <button className={`number-btn ${props.zeroClass}`}>{props.number}</button>

    )
};

export default NumberButton;