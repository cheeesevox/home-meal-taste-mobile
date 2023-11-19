import { SafeAreaView, StatusBar, Text, View } from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
import CustomerNavigator from "./src/navigation/CustomerNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>{
      <CustomerNavigator />
      }</NavigationContainer>
  );
}
