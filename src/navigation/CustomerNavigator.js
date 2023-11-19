import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CustomerHome from '../screens/CustomerScreens/CustomerHome';
import ForgotPassword from '../screens/CustomerScreens/ForgotPassword';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function CustomerNavigator() {
    // console.log(Stack)
  return (
    <Stack.Navigator 
    initialRouteName="Login" 
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Home"} component={BottomTabNavigator} />
      <Stack.Screen name={"Regiter"} component={RegisterScreen} />
      <Stack.Screen name={"CustomerHome"} component={CustomerHome}/>
      <Stack.Screen name={"ForgotPassword"} component={ForgotPassword}/>

    </Stack.Navigator>
  );
}
export default CustomerNavigator;