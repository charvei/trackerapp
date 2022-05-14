import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Formik, Field } from 'formik'

import * as SurveyClient from '../backend_client/SurveyClient'
import RadioSelectFormItem from './RadioSelectFormItem';


export default function SurveyForm() {
  const [surveyData, setSurveyData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const moodSurveyId = "c4ac8e69-5e7c-407e-93f1-77f677acc425"

  useEffect(() => {
    SurveyClient.getSurvey(moodSurveyId)
      .then(function (response) {
        console.log(response.data)
        setSurveyData(response.data)
        setIsLoaded(true)
      })
      .catch(function (error) {
        console.log(error)
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  const sendSurveyResponses = (values) => {
    console.log("sending form")
    SurveyClient.postSurveyResponses({
        "surveyId": surveyData.id,
        "responses": Object.keys(values).map(key => ({"surveyItemId": key, "responseCode": values[key]}))
      })
      .then(function (response) {
        console.log(response)
        setSubmitted(true)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const buildForm = () => {
    let formValues = {}
    surveyData.items.map(surveyItem => {
      formValues[surveyItem.id] = null
    })
    console.log(formValues)

    return (
      <Formik
        initialValues={formValues}
        onSubmit={(values, { resetForm }) => {
          sendSurveyResponses(values)
          resetForm()
        }}
      >
        {({handleSubmit, resetForm, values}) => (
        <View style={styles.container}>
          <Text style={styles.title}>{surveyData.name}</Text>
          {surveyData.items.map((surveyItem) =>
            <Field name={surveyItem.id} component={RadioSelectFormItem} data={surveyItem} values={values} key={surveyItem.id}></Field>)}
          <Button onPress={handleSubmit} title="Submit"/>
        </View>)}
      </Formik>
    )

  }

  if (error) {
    return <Text>{error}</Text>
  } else if (!isLoaded) {
    return <Text>Loading survey form!</Text>
  } else {
    if (!submitted) {
      return buildForm()
    } else {
      return <View><Text>Submitted!</Text><Text>Submitted!</Text><Text>Submitted!</Text></View>
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 8,
    color: '#000'
  },
  container: {
    padding: 4,
  }
});
