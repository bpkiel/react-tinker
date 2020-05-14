import React from 'react';
import OperatorButton from './OperatorButton';

const OperatorButtonContainer = ({ currentOperator, operatorCallback, runCalcCallback }) => {

    const operators = ['+', '-', '/', '*', '='];

    return (
        <div className='operator-block'>
            {operators.map(operator => (
                <OperatorButton
                    key={operator}
                    operatorClass={`operator-${operator}`}
                    operator={operator}
                    handleButtonClick={e => {
                        operator !== '=' ? operatorCallback(operator) : runCalcCallback() }
                    }
                />
            ))}
        </div>
    );
}

export default OperatorButtonContainer