import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import * as ActivityClient from '../backend_client/ActivityClient'
// import { getActivityEvents } from '../backend_client/ActivityClient';

export default function ActivityStatsScreen({route, navigation, ...props}) {
  const { activity } = route.params
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [activityEvents, setActivityEvents] = useState([])

  useEffect(() => {
    getActivityEvents()
  }, [])

  const getActivityEvents = () => {
    ActivityClient.getActivityEvents(activity.id)
      .then(function (response) {
        console.log(response.data)
        setActivityEvents(response.data)
        setIsLoaded(true)
      })
      .catch(function (error) {
        console.log(error)
        setIsLoaded(true)
        setError(true)
      })
  }

  return (
    <View>
      {activityEvents.map(activityEvent => 
        // <Text>{console.log(activityEvent.startedAt.toString())}</Text>
        // <Text>{activityEvent.startedAt}</Text>
        <View key={activityEvent.id}><Text>{activityEvent.startedAt}</Text></View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
});
