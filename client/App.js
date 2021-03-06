import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActivityStatsScreen from './screens/ActivityStatsScreen';
import ActivityScreen from './screens/ActivityScreen'
import HomeScreen from './screens/HomeScreen';
import SurveyScreen from './screens/SurveyScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Home"}}
        />
        <Stack.Screen
          name="Survey"
          component={SurveyScreen}
          options={{title: "Survey"}}
        />
        <Stack.Screen
          name="ActivityStats"
          component={ActivityStatsScreen}
          options={{title: 'Activity Stats'}}
        />
        <Stack.Screen
          name="Activities"
          component={ActivityScreen}
          options={{title: "Activities"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
  }
});
