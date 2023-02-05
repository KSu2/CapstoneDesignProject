import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import PictureScreen from './screens/PictureScreen';
import ForgotScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

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
        <Stack.Screen
          name='HomePage'
          //options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <Drawer.Navigator>
  //     <Drawer.Screen name='Login' component={LoginScreen} />
  //     <Drawer.Screen name='Add Pictures' component={PictureScreen} />
  //   </Drawer.Navigator>
  // );
}
