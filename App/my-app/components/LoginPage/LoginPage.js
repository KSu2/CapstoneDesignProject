import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import style from './LoginPage.css';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
} from 'react-native';

const LoginPage = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.container}>
			<Image
				style={{ width: 100, height: 100, paddingBottom: '15px' }}
				source={require('../../assets/house.jpg')}
			/>
			<StatusBar style="auto" />
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Email."
					placeholderTextColor="#003f5c"
					onChangeText={(email) => setEmail(email)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Password."
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
				/>
			</View>
			<TouchableOpacity>
				<Button
					style={styles.forgot_button}
					title="Forgot Password?"
					onPress={() => navigation.navigate('ForgotPage')}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn}>
				<Button
					style={styles.loginText}
					title="Login"
					//add check that password is correct ow send to incorrect pass page
					onPress={() => navigation.navigate('PicturePage')}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		marginBottom: 40,
	},
	inputView: {
		backgroundColor: '#FFC0CB',
		borderRadius: 30,
		width: '70%',
		height: 45,
		marginBottom: 20,
		alignItems: 'center',
	},
	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	forgot_button: {
		height: 30,
		marginBottom: 30,
	},
	loginBtn: {
		width: '80%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
	},
});

export default LoginPage;
