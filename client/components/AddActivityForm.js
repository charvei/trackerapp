import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

import { Formik, Field } from 'formik';

import * as ActivityClient from '../backend_client/ActivityClient'

/**
 * TODO: 
 *  - Update activities list in activity screen after activity has been added
 */

export default function AddActivityForm(props) {
    const [submitted, setSubmitted] = useState(false)

    const postActivity = (values) => {
        const data = {
            "name": values.activityName,
            "tags": [values.tags]
        }
        ActivityClient.postActivities(data)
    }

    const buildForm = () => {
        return (
            <Formik
                initialValues={{ 'activityName': '', 'tags': '' }}
                onSubmit={(values, { resetForm }) => {
                    postActivity(values)
                    resetForm()
                    setSubmitted(true)
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values, form}) => (
                <View style={styles.formContainer}>
                    <View style={styles.formBody}>
                        <View style={styles.textInputField}>
                            <Text>Activity Name:</Text>
                            <TextInput 
                                value={values.activityName} 
                                style={{borderBottomWidth : 1, width: '100%'}}
                                onChangeText={handleChange('activityName')}
                            />
                        </View>
                        <View style={styles.textInputField}>
                            <Text>Tags:</Text>
                            <TextInput
                                value={values.tags} 
                                style={{borderBottomWidth : 1, width: '100%'}}
                                onChangeText={handleChange('tags')}
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
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeInput: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: '50%',
    },
    dateTimeInput: {
        flexDirection: 'row'
    },
    formBody: {
        flex: 1,
    },
    textInputField: {
        // flex: 1,
        // width: '100%',
        // flexDirection: 'row',
        padding: 10

    }
})