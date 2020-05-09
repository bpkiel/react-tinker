import React from 'react';

const OperatorButton = (props) => {
    return (
        <button className={`operator-btn ${props.operatorClass}`}>{props.operator}</button>
    )
};

export default OperatorButton;