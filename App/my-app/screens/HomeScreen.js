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
import LoginScreen from './LoginScreen';
import PictureScreen from './PictureScreen';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<Drawer.Navigator initialRouteName="Feed">
			<Drawer.Screen
				name="Feed"
				component={LoginScreen}
				options={{ drawerLabel: 'Login' }}
			/>
			<Drawer.Screen
				name="Picture"
				component={PictureScreen}
				options={{ drawerLabel: 'Picture' }}
			/>
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
