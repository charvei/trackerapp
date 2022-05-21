import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import * as ActivityClient from '../backend_client/ActivityClient'
import CustomModal from '../components/CustomModal';
import RecordEventForm from '../components/RecordEventForm';
import AddActivityForm from '../components/AddActivityForm';


export default function ActivityScreen({ navigation }) {
  const [activities, setActivities] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [recordEventModalVisible, setRecordEventModalVisible] = useState(false)
  const [addActivityModalVisible, setAddActivityModalVisible] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState(null)

  useEffect(() => {
    updateActivities()
  }, [])

  const updateActivities = () => {
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
  }

  const onRecordEventPress = (activity) => {
    setSelectedActivity(activity)
    setRecordEventModalVisible(true)
  }

  const onAddActivityButtonPress = () => {
    setAddActivityModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <CustomModal
        title={selectedActivity && `Record a ${selectedActivity.name} Event`}
        visible={recordEventModalVisible} 
        animationType='slide'
        closeModalFn={() => {
          setRecordEventModalVisible(false)
        }}
        modalContentsStyle={styles.recordEventModalContents}
        modalStyle={styles.recordEventModal}
        bodyContent={<RecordEventForm activity={selectedActivity}/>}
      />
      <CustomModal
        title={"Add an Activity"}
        visible={addActivityModalVisible} 
        animationType='fade'
        // setModalVisibleFn={setAddActivityModalVisible}
        closeModalFn={() => {
          setAddActivityModalVisible(false)
          updateActivities()
        }}
        modalContentsStyle={styles.addEventModalContents}
        modalStyle={styles.addEventModal}
        bodyContent={<AddActivityForm/>}
        // activityScreenSetState={updateActivities}
      />
      <ScrollView style={styles.activitiesContainer}>
        {activities.map((activity) => 
          <View
            key={activity.id}
            style={styles.activityItemContainer}
          >  
            <Text>{activity.name}</Text>
            <Button
              title="Record Event"
              onPress={() => onRecordEventPress(activity)}
            />
          </View>
        )}
      </ScrollView>
      <Button
        title="Add Activity"
        onPress={() => {
          onAddActivityButtonPress()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activitiesContainer: {
    width: '100%'
  },
  activityItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  recordEventModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  recordEventModalContents: {
    height: "50%",
    width: "100%",
    alignItems: 'center',
  },
  addEventModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addEventModalContents: {
    height: "100%",
    width: "100%"
  }
});
