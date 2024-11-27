import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../containers/Welcome';
import ContentScreem from '../components/ContentScreem';

const Stack = createNativeStackNavigator();

const fadeAnimation = ({current}: {current: any}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function Routes() {
  return (
    <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: fadeAnimation,
        }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="ContentScreem"
        component={ContentScreem}
      />
    </Stack.Navigator>
  );
}
