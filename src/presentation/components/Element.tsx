import { Text, Pressable } from 'react-native';
import { globalStyles } from '../../config/theme/app.theme';

interface Props {
    label: string;
    color: string;
    size?: number;
    onPress: () => void;
}

export default function Element({ label, color, size = 1, onPress }: Props) {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                width: size > 1 ? size * 70 + 16 : size * 70,
                opacity: pressed ? 0.6 : 1,
            })}
            onPress={() => onPress()}>
            <Text style={globalStyles.buttonLabel}>{label}</Text>
        </Pressable>
    );
}
