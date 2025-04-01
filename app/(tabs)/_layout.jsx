import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{headerShown: false}}
    tabBarActiveTintColor={Colors.PRIMARY}
    >
      <Tabs.Screen
       name="myTrip"
       options={{
        tabBarLabel: 'Seyahatlerim',
        tabBarIcon:({color})=><Ionicons name="location" size={24} color={color} />
      }} 
      />
      <Tabs.Screen 
      name="discover"
      options={{
        tabBarLabel: 'Yeni Seyahat',
        tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color={color} />
      }}
      />     
    </Tabs>
  )
}

{/* <Tabs.Screen 
      name="discover"
      options={{
        tabBarLabel: 'Keşfet',
        tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color={color} />
      }}
      />    
      <Tabs.Screen 
      name="profile"
      options={{
        tabBarLabel: 'Profil',
        tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />
      }}
      />       */}