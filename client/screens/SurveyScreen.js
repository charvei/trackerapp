import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SurveyForm from '../components/Survey';

export default function SurveyScreen() {
  return (
    <View style={styles.container}>
      <SurveyForm></SurveyForm>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#bcc',
  },
});
