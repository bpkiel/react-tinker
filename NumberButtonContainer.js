import React from 'react';
import NumberButton from './NumberButton';

const NumberButtonContainer = ({ firstNumCallback, secondNumCallback, firstNum, secondNum, currentOperator}) => {

    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    return (
        <div className='numbers-block'>
            {numbers.map(number => (
                <NumberButton
                    key={number}
                    zeroClass={number === 0 ? `button-${number}` : ''}
                    number={number}
                    handleButtonClick={e => {
                        if (currentOperator === '') {
                            firstNum === '0' || currentOperator !== '' ? firstNum = '' : firstNum;
                            firstNum.length < 8 ? firstNumCallback(firstNum + number.toString()) : firstNum;
                        } else {
                            secondNum.length < 8 ? secondNumCallback(secondNum + number.toString()) : secondNum;
                        }
                    }}
                />
            ))}
        </div>
    )
};

export default NumberButtonContainer;