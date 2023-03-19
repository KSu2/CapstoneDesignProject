import { NavigationContainer, StackActions } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SocketProvider } from './context/socket';
import { auth } from './firebase';
import AppStack from './stacks/AppStack';
import AuthStack from './stacks/AuthStack';

const Drawer = createDrawerNavigator();

function onAuthStateChange(callback) {
	auth.onAuthStateChanged((user) => {
		console.log('state changed');
		console.log(user);
		if (user) {
			callback({ loggedIn: true });
		} else {
			callback({ loggedIn: false });
		}
	});
}

export default function App() {
	const [user, setUser] = useState({ loggedIn: false });
	let render;
	console.log(auth.currentUser);
	useEffect(() => {
		const unsubscribe = onAuthStateChange(setUser);
		return () => {
			unsubscribe();
		};
	}, []);
	if (!user.loggedIn) {
		return (
			<SocketProvider>
				<NavigationContainer>
					<AuthStack></AuthStack>
				</NavigationContainer>
			</SocketProvider>
		);
	}
	return (
		<SocketProvider>
			<NavigationContainer>
				<AppStack></AppStack>
			</NavigationContainer>
		</SocketProvider>
	);
}
