import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import * as ActivityClient from '../backend_client/ActivityClient'
import CustomModal from '../components/CustomModal';
import RecordEventForm from '../components/RecordEventForm';
import AddActivityForm from '../components/AddActivityForm';
import ActivityEntry from '../components/ActivityEntry';
import ConfirmDeletePrompt from '../components/ConfirmDeletePrompt';


export default function ActivityScreen({ navigation }) {
  const [activities, setActivities] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [recordEventModalVisible, setRecordEventModalVisible] = useState(false)
  const [addActivityModalVisible, setAddActivityModalVisible] = useState(false)
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] = useState(false)
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

  const onDeleteActivityPress = (activity) => {
    setSelectedActivity(activity)
    setConfirmDeleteModalVisible(true)
  }

  const onAddActivityButtonPress = () => {
    setAddActivityModalVisible(true)
  }

  /**** MODALS ****/
  const RecordEventModal = () => {
    return (
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
    )
  }

  const AddActivityModal = () => {
    return (
      <CustomModal
        title={"Add an Activity"}
        visible={addActivityModalVisible} 
        animationType='fade'
        closeModalFn={() => {
          updateActivities()
          setAddActivityModalVisible(false)
        }}
        modalContentsStyle={styles.addEventModalContents}
        modalStyle={styles.addEventModal}
        bodyContent={<AddActivityForm/>}
      />
    )
  }

  const ConfirmDeleteModal = () => {
    return (
      <CustomModal
        title={selectedActivity && `Delete ${selectedActivity.name} Event?`}
        visible={confirmDeleteModalVisible}
        animationType='slide'
        closeModalFn={() => {
          updateActivities()
          setConfirmDeleteModalVisible(false)
        }}
        bodyContent={
          <ConfirmDeletePrompt 
            activity={selectedActivity}
            closeModalFn={() => {
              updateActivities()
              setConfirmDeleteModalVisible(false)
            }}
            updateActivities={updateActivities}
          />
        }
        modalStyle={styles.confirmDeleteModal}
        modalContentsStyle={styles.confirmDeleteModalContents}        
      />
    )
  }

  return (
    <View style={styles.container}>
      <RecordEventModal />
      
      <AddActivityModal />
      
      <ConfirmDeleteModal />

      <ScrollView style={styles.activitiesContainer}>
        {activities.map((activity) =>
          <ActivityEntry
            key={activity.id}
            activity={activity}
            onRecordEventPress={onRecordEventPress}
            onDeleteActivityPress={onDeleteActivityPress}
            updateActivities={updateActivities}
            navigation={navigation}
          />
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
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
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
  confirmDeleteModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  confirmDeleteModalContents: {
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
