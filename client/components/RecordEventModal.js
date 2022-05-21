import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';


export default function RecordEventModal(props) {
 
  return (
    <Modal
      animationType='slide'
      visible={props.visible}
      transparent={true}
      onRequestClose={() => props.setModalVisibleFn(false)}
    >
      <TouchableWithoutFeedback onPress={() => props.setModalVisibleFn(false)}>
        <View style={props.modalStyle}>
          <TouchableHighlight style={props.modalContentsStyle}>
            {props.bodyContent}
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
