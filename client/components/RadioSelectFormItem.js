import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import RadioButton from './RadioButton';

export default function RadioSelectFormItem({field, form, ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.data.label}</Text>
      {
        props.data.options.map(option => 
          <RadioButton form={form} key={option.code} label={option.label} responseCode={option.code} surveyItemId={props.data.id} values={props.values}/>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    padding: 8,
    color: '#000'
  }
})
