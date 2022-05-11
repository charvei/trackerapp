import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, View, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View contentContainerStyle={styles.container}>
            <Button 
              title="Mood Survey"
              onPress={() => {
                navigation.navigate('Survey')
              }}
            />
            <Button 
              title="Activities"
              onPress={() => {
                navigation.navigate('Activities')
              }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
