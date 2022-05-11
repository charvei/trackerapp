import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ActivityEventsScreen({ navigation }) {
    return (
        <View contentContainerStyle={styles.container}>
            <Text>Hi I'm the activity events screen!</Text>
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
