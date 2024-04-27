import { View, Text, Pressable } from 'react-native';
import { colors, globalStyles } from '../../config/theme/app.theme';
import Element from '../components/Element';
import useCalculator from '../hooks/useCalculator';

const buttons = [
    {
        label: 'C',
        color: colors.grayLight,
        type: 'clear',
    },
    {
        label: 'D',
        color: colors.grayLight,
        type: 'delete',
    },
    {
        label: '+/-',
        color: colors.grayLight,
        type: 'toggle',
    },
    {
        label: '÷',
        color: colors.orange,
        type: 'divide',
    },
    {
        label: '7',
        color: colors.grayDark,
    },
    {
        label: '8',
        color: colors.grayDark,
    },
    {
        label: '9',
        color: colors.grayDark,
    },
    {
        label: '×',
        color: colors.orange,
        type: 'multiply',
    },
    {
        label: '4',
        color: colors.grayDark,
    },
    {
        label: '5',
        color: colors.grayDark,
    },
    {
        label: '6',
        color: colors.grayDark,
    },
    {
        label: '-',
        color: colors.orange,
        type: 'subtract',
    },
    {
        label: '1',
        color: colors.grayDark,
    },
    {
        label: '2',
        color: colors.grayDark,
    },
    {
        label: '3',
        color: colors.grayDark,
    },
    {
        label: '+',
        color: colors.orange,
        type: 'add',
    },
    {
        label: '0',
        color: colors.grayDark,
        size: 2,
    },
    {
        label: '.',
        color: colors.grayDark,
    },
    {
        label: '=',
        color: colors.orange,
        type: 'result',
    },
];

export default function CalculatorScreen() {
    const {
        number,
        prevNumber,
        formula,
        buildNumber,
        clear,
        deleteOne,
        toggleSign,
        addOperator,
        subtractOperator,
        multiplyOperator,
        divideOperator,
        calculateResult,
    } = useCalculator();

    return (
        <View style={globalStyles.calculatorContainer}>
            <View>
                <Text
                    style={globalStyles.subResult}
                    adjustsFontSizeToFit
                    numberOfLines={1}>
                    {formula}
                </Text>
                {formula === prevNumber ? (
                    <Text style={globalStyles.mainResult}> </Text>
                ) : (
                    <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={globalStyles.mainResult}>
                        {prevNumber}
                    </Text>
                )}
            </View>
            <View style={globalStyles.grid}>
                {buttons.map((button, i) => {
                    if (button.type === 'add') {
                        return (
                            <Element
                                key={i}
                                {...button}
                                onPress={addOperator}
                            />
                        );
                    }
                    if (button.type === 'subtract') {
                        return (
                            <Element
                                key={i}
                                {...button}
                                onPress={subtractOperator}
                            />
                        );
                    }
                    if (button.type === 'multiply') {
                        return (
                            <Element
                                key={i}
                                {...button}
                                onPress={multiplyOperator}
                            />
                        );
                    }
                    if (button.type === 'divide') {
                        return (
                            <Element
                                key={i}
                                {...button}
                                onPress={divideOperator}
                            />
                        );
                    }
                    if (button.type === 'result') {
                        return (
                            <Element
                                key={i}
                                {...button}
                                onPress={calculateResult}
                            />
                        );
                    }
                    if (button.type === 'clear') {
                        return <Element key={i} {...button} onPress={clear} />;
                    }
                    if (button.type === 'delete') {
                        return (
                            <Element key={i} {...button} onPress={deleteOne} />
                        );
                    }
                    if (button.type === 'toggle') {
                        return (
                            <Element key={i} {...button} onPress={toggleSign} />
                        );
                    }
                    return (
                        <Element
                            key={i}
                            {...button}
                            onPress={() => buildNumber(button.label)}
                        />
                    );
                })}
            </View>
        </View>
    );
}
