
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import AboutScreen from './screens/About/AboutScreen';
import CreateScreen from './screens/CreateScreen/CreateScreen';
import DevicesScreen from './screens/DevicesScreen/DevicesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen name="Splash" component={SplashScreen} 
            options={{ 
            headerShown: false
          }} 
        />

        <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ 
                headerShown: false
              }} 
        />

        <Stack.Screen name="Welcome" component={WelcomeScreen} 
          options={{ 
            headerShown: false
          }} 
        />
        <Stack.Screen name="About" component={AboutScreen} 
          options={{ 
            headerShown: false
          }} 
        />
        <Stack.Screen name="Create" component={CreateScreen} 
          options={{ 
            headerShown: false
          }} 
        />
        <Stack.Screen name="Devices" component={DevicesScreen} 
          options={{ 
            headerShown: false
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red'
  },
};
