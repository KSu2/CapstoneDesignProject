import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import PictureScreen from './screens/PictureScreen';
import ForgotScreen from './screens/RegisterScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          //options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name='PicturePage'
          //options={{ headerShown: false }}
          component={PictureScreen}
        />
        <Stack.Screen
          name='ForgotPage'
          //options={{ headerShown: false }}
          component={ForgotScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
