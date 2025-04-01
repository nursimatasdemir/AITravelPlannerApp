import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {CreateTripContext} from '../context/CreateTripContext';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [tripData, setTripData] = useState([]);
  const [loaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  

  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
    <Stack screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="index" options={{headerShown:false}} /> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </CreateTripContext.Provider>
  );
}
