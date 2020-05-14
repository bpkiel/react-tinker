import React, { useState } from 'react';
import Screen from './Screen';
import NumberButtonContainer from './NumberButtonContainer';
import OperatorButtonContainer from './OperatorButtonContainer';

const Calculator = () => {
    const [screenFirstNumber, setScreenFirstNumber] = useState('0');
    const [screenSecondNumber, setScreenSecondNumber] = useState(screenFirstNumber);
    // const [screenNumber, setScreenNumber] = useState('0');
    const [operator, setOperator] = useState('');

    let saveFirstNum = (operator, currentNum) => {
        setOperator(operator);
    }

    const runCalc = () => {
        debugger;
        setScreenNumber(parseInt(screenFirstNumber) * parseInt(screenSecondNumber));

        // switch(operator) {
        //     case 'x':
        //         setScreenNumber(firstNum * secondNum;
        //         screen.innerHTML = finalValue;
        //         break;
        //     case '/':
        //         finalValue = firstNumberFinal / secondNumberFinal;
        //         screen.innerHTML = finalValue;
        //         break;
        //     case '-':
        //         finalValue = firstNumberFinal - secondNumberFinal;
        //         screen.innerHTML = finalValue;
        //         break;
        //     case '+':
        //         finalValue = parseInt(firstNumberFinal) + parseInt(secondNumberFinal);
        //         screen.innerHTML = finalValue;
        //         break;
        // }

        console.log('running calc function')
    }

    return(
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
            <OperatorButtonContainer  operatorCallback={saveFirstNum} runCalcCallback={runCalc}/>
        </div>
    )
};

export default Calculator;