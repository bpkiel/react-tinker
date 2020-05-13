import React from 'react';
import NumberButton from './NumberButton';

const NumberButtonContainer = ({callback, currentNum}) => {

    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    return (
        <div className='numbers-block'>
            {numbers.map(number => (
                <NumberButton
                    key={number}
                    zeroClass={number === 0 ? `button-${number}` : ''}
                    number={number}
                    handleButtonClick={e => {
                        currentNum === '0' ? currentNum = '' : currentNum;
                        currentNum.length < 8 ? callback(currentNum + number.toString()) : currentNum;
                    }}
                />
            ))}
        </div>
    )
};

export default NumberButtonContainer;