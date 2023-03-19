import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const AuthStack = ({ navigation }) => {
	return (
		<Drawer.Navigator initialRouteName="Login">
			<Drawer.Screen
				name="Login"
				component={LoginScreen}
				options={{ drawerLabel: 'Login' }}
			/>
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default AuthStack;
