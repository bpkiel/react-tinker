import React, { useState } from 'react';

const Screen = ({callback, firstNum, secondNum, currentOperator}) => {

    return (
        <input
            className='screen'
            value={ currentOperator === '' ? firstNum : secondNum }
            id='screen'
            placeholder="0"
            type='number'
            onFocus={() => callback('')}
            onChange={e => callback(e.target.value)}
        />
    )
};

export default Screen;