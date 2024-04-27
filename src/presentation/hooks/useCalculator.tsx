import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

export default function useCalculator() {
    const [formula, setFormula] = useState('');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperator = useRef<Operator>();

    function clear() {
        setNumber('0');
        setPrevNumber('0');
        lastOperator.current = undefined;
        setFormula('');
    }

    useEffect(() => {
        if (lastOperator.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    function deleteOne() {
        if (number.length <= 2 && number.includes('-')) {
            setNumber('0');
            return;
        }
        if (number.length <= 1) {
            setNumber('0');
            return;
        }
        setNumber(number.slice(0, number.length - 1));
    }

    function toggleSign() {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    }

    function buildNumber(numberString: string) {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    }

    function setLastNumber() {
        calculateResult();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    }

    function addOperator() {
        setLastNumber();
        lastOperator.current = Operator.add;
    }

    function subtractOperator() {
        setLastNumber();
        lastOperator.current = Operator.subtract;
    }

    function multiplyOperator() {
        setLastNumber();
        lastOperator.current = Operator.multiply;
    }

    function divideOperator() {
        setLastNumber();
        lastOperator.current = Operator.divide;
    }

    function calculateResult() {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperator.current = undefined;
        setPrevNumber('0');
    }

    const calculateSubResult = (): number => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue); //NaN

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error('Operation not implemented');
        }
    };

    return {
        // Properties
        number,
        prevNumber,
        formula,

        // Methods
        buildNumber,
        clear,
        deleteOne,
        toggleSign,
        addOperator,
        subtractOperator,
        multiplyOperator,
        divideOperator,
        calculateResult,
    };
}
