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
import PictureScreen from '../screens/PictureScreen';
import StatusScreen from '../screens/StatusScreen';

const Drawer = createDrawerNavigator();

const AppStack = ({ navigation }) => {
	return (
		<Drawer.Navigator initialRouteName="Picture">
			<Drawer.Screen
				name="Picture"
				component={PictureScreen}
				options={{ drawerLabel: 'Picture' }}
			/>
			<Drawer.Screen
				name="Status"
				component={StatusScreen}
				options={{ drawerLabel: 'Status' }}
			/>
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default AppStack;
