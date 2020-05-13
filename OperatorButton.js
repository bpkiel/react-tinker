import React, { useState } from 'react';

const OperatorButton = (props) => {
    const[firstNumber, setFirstNumber] = useState('0');
    // const [operator, setOperator] = useState('');

    return (
        <button
            className={`operator-btn ${props.operatorClass}`}>{props.operator}
            {/*onClick={e => setFirstNumber(document.getElementById('screen').value}*/}
        </button>
    )
};

export default OperatorButton;