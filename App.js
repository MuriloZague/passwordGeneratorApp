import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor='#392DE9'/>
      <Routes/>
    </NavigationContainer>
  );
}
