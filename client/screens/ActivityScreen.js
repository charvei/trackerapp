import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import * as ActivityClient from '../api_client/ActivityClient'


export default function ActivityScreen({ navigation }) {
  const [activities, setActivities] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    ActivityClient.getActivities()
      .then(function (response) {
        console.log(response.data)
        setActivities(response.data)
        setIsLoaded(true)
      })
      .catch(function (error) {
        console.log(error)
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {activities.map((activity) => 
          <View key={activity.id}>
            <Text>{activity.name}</Text>
            <Button
              title="Record Event"
            />
          </View>
        )}
      </ScrollView>
      <Button
        title="Add Activity"
        onPress={() => {
          
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
