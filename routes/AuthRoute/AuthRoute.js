import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../Screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from '../../Screens/auth/RegistrationScreen/RegistrationScreen';

const AuthStack = createStackNavigator();

const AuthRoute = () => <AuthStack.Navigator initialRouteName='LoginScreen'>
    <AuthStack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
            headerShown: false,
        }}
    />
    <AuthStack.Screen
        name={'RegistrationScreen'}
        component={RegistrationScreen}
        options={{
            headerShown: false,
        }}
    />
</AuthStack.Navigator>;

export default AuthRoute;