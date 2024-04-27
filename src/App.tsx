import { StatusBar, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import CalculatorScreen from './presentation/screens/Calculator.screen';

import { globalStyles } from './config/theme/app.theme';

function App() {
    return (
        <PaperProvider settings={{ icon: props => <IonIcon {...props} /> }}>
            <View style={globalStyles.background}>
                <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
                <CalculatorScreen />
            </View>
        </PaperProvider>
    );
}

export default App;
