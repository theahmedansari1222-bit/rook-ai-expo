import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import WritingScreen from './src/screens/WritingScreen';
import ResearchScreen from './src/screens/ResearchScreen';
import MemoryScreen from './src/screens/MemoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Writing" component={WritingScreen} />
        <Stack.Screen name="Research" component={ResearchScreen} />
        <Stack.Screen name="Memory" component={MemoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
