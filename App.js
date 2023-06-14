import * as React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from './screens/Welcome';
import LoginForm from './screens/Login';
import SignUpForm from './screens/SignUp';
import SetupProfile from './screens/SetupProfile';
import Home from './screens/Home'
import NavBar from './screens/NavBar';
import Artists from './screens/Artists';
import Messages from './screens/Messages';
import Profile from './screens/Profile';
import SingleGig from './screens/SingleGig'

const Stack = createNativeStackNavigator()


export default function App() {

  
  return (
   <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={NavBar}></Stack.Screen>
      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
      <Stack.Screen name="SingleGig" component={SingleGig}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginForm}></Stack.Screen>
      <Stack.Screen name="Signup-Form" component={SignUpForm}></Stack.Screen>
      <Stack.Screen name="SetupProfile" component={SetupProfile}></Stack.Screen>
      <Stack.Screen name="Artists" component={Artists}></Stack.Screen>
      <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
