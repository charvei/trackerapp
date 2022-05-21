import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

import { Formik, Field } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

import * as ActivityClient from '../backend_client/ActivityClient'
import RecordEventModal from '../components/RecordEventModal';


function DateTimeInput({field, form, ...props}) {
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState('time')
    const [time, setTime] = useState(new Date())

    const onChange = (event, selectedDate) => {
        setShow(false)

        if (mode === 'time') {
            let tempTime = new Date(time)
            tempTime.setHours(selectedDate.getHours())
            tempTime.setMinutes(selectedDate.getMinutes())
            setTime(tempTime)
        } else if (mode === 'date') {
            // setDate(selectedDate)
            let tempTime = new Date(time)
            tempTime.setDate(selectedDate.getDate())
            tempTime.setMonth(selectedDate.getMonth())
            tempTime.setFullYear(selectedDate.getFullYear())
            setTime(tempTime)
        }

        onDateTimeInputChange()
    }

    onDateTimeInputChange = () => {
        form.setFieldValue(props.valueName, time)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    return (
        <View style={styles.dateTimeInput}>
            <Button
                onPress={() => showMode('time')}
                title={time.toLocaleTimeString('en-AU',  { hour: '2-digit', minute: '2-digit' }).slice(0, -3)}
            />
            <Button
                onPress={() => showMode('date')}
                title={`${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`}
            />
            {show && <DateTimePicker 
                testID="123"
                value={time}
                mode={mode}
                onChange={onChange}
            />}
        </View>
    )
}


export default function RecordEventForm(props) {
    const [submitted, setSubmitted] = useState(false)

    const postActivityEvent = (values) => {
        const data = {
            "activityId": props.activity.id,
            "startedAt": values.startedAt,
            "finishedAt": values.finishedAt

        }
        console.log(data)
        ActivityClient.postActivityEvents(data)
    }

    const buildForm = () => {
        return (
            <Formik
                initialValues={{ 'startedAt': new Date(), 'finishedAt': new Date() }}
                onSubmit={(values, { resetForm }) => {
                    postActivityEvent(values)
                    resetForm()
                    setSubmitted(true)
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values, form}) => (
                <View style={styles.formContainer}>
                    <View>
                        <View style={styles.timeInput}>
                            <Text>Started at:</Text>
                            <Field
                                name={"startedAt"}
                                component={DateTimeInput}
                                valueName={"startedAt"}
                            />
                        </View>
        
                        <View style={styles.timeInput}>
                            <Text>Finished at:</Text>
                            <Field
                                name={"finishedAt"}
                                component={DateTimeInput}
                                // onDateTimeInputChange={onDateTimeInputChange}
                                valueName={"finishedAt"}
                            />
                        </View>
                    </View>  
                    <Button 
                        title={"Submit"}
                        onPress={handleSubmit}
                    />
                </View>
                )}
            </Formik>
    )}

    if (!submitted) {
        return buildForm()
    } else {
        return <View style={styles.formContainer}><Text>Submitted!</Text></View>
    }

  }

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 8,
        width: '100%',
        // backgroundColor: '#222',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeInput: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: '80%',
    },
    dateTimeInput: {
        flexDirection: 'row'
    }
})
