import React, {useState} from 'react';

const Screen = () => {
    const [number, setNumber] = useState('0');

    return (
        <input
            className='screen'
            value={number}
            id='number'
            placeholder="0"
            type='text'
            maxLength='8'
            pattern="\d*"
            //TODO Add onfocus and start intial state at 0
            onChange={e => setNumber(e.target.value)}
        />
    )
};

export default Screen;