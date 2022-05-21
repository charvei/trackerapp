import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function RadioButton(props) {
  const [buttonPressed, setButtonPressed] = useState(false)

  onPressFunction = () => {
    props.form.setFieldValue(props.surveyItemId, props.responseCode)
  }


  return (
    <Pressable 
        onPress={onPressFunction} 
        style={props.values[props.surveyItemId] === props.responseCode ? styles.activeRadioButton : styles.inactiveRadioButton
    }>
      <View style={styles.radioButton}>
        <Text>{props.label}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  activeRadioButton: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    padding: 16,
    
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 4,

    borderRadius: 8
  },
  inactiveRadioButton: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 4,

    borderRadius: 8,
  }
});
