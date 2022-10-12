import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SelectLogin } from './src/screens/selectLogin';
import { Mapa } from './src/screens/mapa';
import { WelcomeScreen } from './src/screens/welcomeScreen';
import { Register } from './src/screens/register';

export default function App() {

  
  return (
    <View style={styles.container}>
    <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color: "green",
    fontSize: 20,
  },
});
