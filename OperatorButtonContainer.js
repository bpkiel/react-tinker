import React from 'react';
import OperatorButton from './OperatorButton';

const OperatorButtonContainer = () => {

    const operators = ['+', '-', '/', '*', '='];

    return (
        <div className='operator-block'>
            {operators.map(operator => (
                <OperatorButton
                    key={operator}
                    operatorClass={`operator-${operator}`}
                    operator={operator}
                />
            ))}
        </div>
    );
}

export default OperatorButtonContainer