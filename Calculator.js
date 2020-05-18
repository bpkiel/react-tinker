import React, { useState } from 'react';
import Screen from './Screen';
import NumberButtonContainer from './NumberButtonContainer';
import OperatorButtonContainer from './OperatorButtonContainer';

const Calculator = () => {
    const [screenFirstNumber, setScreenFirstNumber] = useState('0');
    const [screenSecondNumber, setScreenSecondNumber] = useState('');
    const [operator, setOperator] = useState('');

    let saveFirstNum = (operator, currentNum) => {
        setOperator(operator);
    }

    const runCalc = () => {

        switch(operator) {
            case '*':
                setScreenSecondNumber(screenFirstNumber * screenSecondNumber);
                break;
            case '/':
                   setScreenSecondNumber(screenFirstNumber / screenSecondNumber);
                break;
            case '-':
                   setScreenSecondNumber(screenFirstNumber - screenSecondNumber);
                break;
            case '+':
                   setScreenSecondNumber(+screenFirstNumber + +screenSecondNumber);
                break;
        }
    }

    return (
        <div className='calc-wrapper'>
            <div>
                <Screen
                    firstNumCallback={setScreenFirstNumber}
                    secondNumCallback={setScreenSecondNumber}
                    firstNum={screenFirstNumber}
                    secondNum={screenSecondNumber}
                    currentOperator={operator}
                />
                <NumberButtonContainer
                    firstNumCallback={setScreenFirstNumber}
                    secondNumCallback={setScreenSecondNumber}
                    firstNum={screenFirstNumber}
                    secondNum={screenSecondNumber}
                    currentOperator={operator}
                />
            </div>
            <OperatorButtonContainer
                operatorCallback={saveFirstNum}
                runCalcCallback={runCalc}
                secondNumCallback={setScreenSecondNumber}
                firstNum={screenFirstNumber}
            />

        </div>
    )
};

export default Calculator;