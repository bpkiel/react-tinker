import React, { useState } from 'react';
import Screen from './Screen';
import NumberButtonContainer from './NumberButtonContainer';
import OperatorButtonContainer from './OperatorButtonContainer';

const Calculator = () => {
    const [screenNumber, setScreenNumber] = useState('0');


    return(
        <div className='calc-wrapper'>
            <div>
                <Screen callback={setScreenNumber} number={screenNumber}/>
                <NumberButtonContainer callback={setScreenNumber} currentNum={screenNumber}/>
            </div>
            <OperatorButtonContainer />
        </div>
    )
};

export default Calculator;