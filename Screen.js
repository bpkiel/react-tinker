import React from 'react';

const Screen = ({callback, firstNum, secondNum}) => {

    return (
        <input
            className='screen'
            value={secondNum === '' ? firstNum : secondNum}
            id='screen'
            placeholder="0"
            type='number'
            onFocus={() => callback('')}
            onChange={e => callback(e.target.value)}
        />
    )
};

export default Screen;