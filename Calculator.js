import React from 'react';
import Screen from './Screen';
import NumberButtonContainer from './NumberButtonContainer';
import OperatorButtonContainer from './OperatorButtonContainer';

const Calculator = () => {

    return(
        <div className='calc-wrapper'>
            <div>
                <Screen />
                <NumberButtonContainer />
            </div>
            <OperatorButtonContainer />
        </div>
    )
};

export default Calculator;