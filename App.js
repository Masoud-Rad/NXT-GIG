import * as React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContext from "./context/user-context";

import Conversation from "./screens/Conversation";
import Welcome from "./screens/Welcome";
import LoginForm from "./screens/Login";
import SignUpForm from "./screens/SignUp";
import SetupProfile from "./screens/SetupProfile";
import NavBar from "./screens/NavBar";
import Artists from "./screens/Artists";
import Messages from "./screens/Messages";
import Profile from "./screens/Profile";
import SingleGig from "./screens/SingleGig";
import EditProfile from "./screens/EditProfile";

import OpenScreen from "./screens/OpenScreen";
import SingleArtist from "./screens/SingleArtist";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();


export default function App() {
  const [user, setUser] = useState("");
  const [currentUid, setCurrentUid] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, currentUid, setCurrentUid }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Open"
            options={{ headerShown: false }}
            component={OpenScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={Welcome}
          ></Stack.Screen>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginForm}></Stack.Screen>
          <Stack.Screen
            name="Signup-Form"
            options={{ headerShown: false }}
            component={SignUpForm}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={NavBar}
          ></Stack.Screen>
          <Stack.Screen name="SingleGig" options={{ headerShown: false }} component={SingleGig}></Stack.Screen>
          <Stack.Screen
            name="SetupProfile"
            options={{ headerShown: false }}
            component={SetupProfile}
          ></Stack.Screen>
          <Stack.Screen
            name="Conversation"
            component={Conversation}
          ></Stack.Screen>
          <Stack.Screen name="Artists" component={Artists}></Stack.Screen>
          <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
          <Stack.Screen
            name="Profile"
            options={{ headerShown: false }}
            component={Profile}
          ></Stack.Screen>
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="SingleArtist"
            component={SingleArtist}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
