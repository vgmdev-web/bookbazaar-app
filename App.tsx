import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/appnavigator';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding1 from './src/components/onboarding2';
import OnBoarding2 from './src/components/onboarding3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={OnBoarding1} />
      <Stack.Screen name="Onboarding2" component={OnBoarding2} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}