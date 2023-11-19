import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerHome from '../screens/CustomerScreens/CustomerHome';
import CustomerOrder from '../screens/CustomerScreens/CustomerOrder';
import CustomerWallet from '../screens/CustomerScreens/CustomerWallet';
import CustomerProfile from '../screens/CustomerScreens/CustomerProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
   <Tab.Navigator>
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='home-outline' size={24} color={color}></Ionicons>
        }} 
        name="Home" 
        component={CustomerHome} />
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='cart-outline' size={24} color={color}></Ionicons>

        }} 
        name='Order' 
        component={CustomerOrder}/>
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='wallet-outline' size={24} color={color}></Ionicons>
          }} 
          name='Wallet' 
          component={CustomerWallet}/>
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='person-circle-outline' size={24} color={color}></Ionicons>
          }} 
          name='Profile' 
          component={CustomerProfile}/>
   </Tab.Navigator> 
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})