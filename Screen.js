import React, { useState } from 'react';

const Screen = ({callback, number}) => {
    // const [number, setNumber] = useState('0');

    //Todo: Since screen is not a parent to the number buttons or the operator buttons,
    // how do you pass a function to those components to update the state of the screen?

    return (
        <input
            className='screen'
            value={number}
            id='screen'
            placeholder="0"
            type='number'
            onFocus={() => callback('')}
            onChange={e => callback(e.target.value)}
        />
    )
};

export default Screen;