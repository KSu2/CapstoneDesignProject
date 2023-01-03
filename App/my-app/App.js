import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage/LoginPage';
import PicturePage from './components/PicturePage/PicturePage';
import ForgotPage from './components/ForgotPage/ForgotPage';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={LoginPage} />
				<Stack.Screen name="PicturePage" component={PicturePage} />
				<Stack.Screen name="ForgotPage" component={ForgotPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
