import LoginScreen from './screens/LoginScreen';
import PictureScreen from './screens/PictureScreen';
import ForgotScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SocketProvider } from './context/socket';
// use to communicate with flask server

// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// 127.0.0.1:5000 - the address should be changed to the ip of the raspberry pi
// this is only for development though need to change this for production

// const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<SocketProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						//options={{ headerShown: false }}
						component={LoginScreen}
					/>
					<Stack.Screen
						name="PicturePage"
						//options={{ headerShown: false }}
						component={PictureScreen}
					/>
					<Stack.Screen
						name="ForgotPage"
						//options={{ headerShown: false }}
						component={ForgotScreen}
					/>
					<Stack.Screen
						name="HomePage"
						//options={{ headerShown: false }}
						component={HomeScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SocketProvider>
	);
	// return (
	//   <Drawer.Navigator>
	//     <Drawer.Screen name='Login' component={LoginScreen} />
	//     <Drawer.Screen name='Add Pictures' component={PictureScreen} />
	//   </Drawer.Navigator>
	// );
}
