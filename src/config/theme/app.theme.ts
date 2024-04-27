import { StyleSheet } from 'react-native';

export const colors = {
    grayDark: '#2d2d2d',
    grayLight: '#9b9b9b',
    orange: '#ff9427',

    textPrimary: '#fff',
    textSecondary: '#666666',
    background: '#000000',
};

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 32
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 4,
        fontWeight: "400"
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: "300"
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        rowGap: 16
    },
    button: {
        backgroundColor: colors.grayDark,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        overflow: "hidden"
    },
    buttonLabel: {
        fontSize: 40,
        color: colors.textPrimary,
    }
});
