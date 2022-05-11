import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SurveyForm from '../components/Survey';

export default function SurveyScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SurveyForm></SurveyForm>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
