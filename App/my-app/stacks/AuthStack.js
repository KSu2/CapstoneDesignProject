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
import RegisterScreen from '../screens/RegisterScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const Drawer = createDrawerNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName='Onboarding'>
      <Drawer.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{ drawerLabel: 'Onboarding', headerShown: false }}
      />
      <Drawer.Screen
        name='Login'
        component={LoginScreen}
        options={{ drawerLabel: 'Login' }}
      />
      <Drawer.Screen
        name='Register'
        component={RegisterScreen}
        options={{ drawerLabel: 'Register' }}
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
