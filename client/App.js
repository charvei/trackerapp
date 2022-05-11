import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SurveyScreen from './screens/SurveyScreen';
import ActivityScreen from './screens/ActivityScreen'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer style={styles.screen}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Home"}}
        />
        <Stack.Screen
          name="Survey"
          component={SurveyScreen}
          options={{title: 'Survey'}}
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
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: '#fff'
  }
});
