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
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <Icon
            name='menu'
            onPress={() => this.props.navigation.openDrawer()}
          />
        }
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
