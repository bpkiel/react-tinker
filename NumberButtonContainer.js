import React from 'react';
import NumberButton from './NumberButton';

const NumberButtonContainer = () => {

    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    return (
        <div className='numbers-block'>
            {numbers.map(number => (
                <NumberButton
                    key={number}
                    zeroClass={number === 0 ? `button-${number}` : ''}
                    number={number}
                />
            ))}
        </div>
    )
};

export default NumberButtonContainer;