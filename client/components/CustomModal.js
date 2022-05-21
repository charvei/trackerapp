import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';


export default function CustomModal(props) {
  return (
    <Modal
      animationType={props.animationType}
      visible={props.visible}
      transparent={true}
      onRequestClose={() => props.closeModalFn()}
    >
      <TouchableWithoutFeedback onPress={() => props.closeModalFn()}>
        <View style={props.modalStyle}>
          <TouchableHighlight style={props.modalContentsStyle}>
            <View style={{width: "100%", flex: 1, alignItems: 'center', backgroundColor: 'pink'}}>
              <View 
                style={{backgroundColor: "tomato",  width: "100%", padding: 10}}
              >
                {props.title && <Text>{props.title}</Text>}
                <View 
                  style={{position: "absolute", right: 0, top: 0, paddingRight: 5}} 
                  onPress={() => props.closeModalFn()}
                >
                  <Button style={{fontSize: 24}} title='x' onPress={() => props.closeModalFn()}></Button>
                </View>
              </View>
              {props.bodyContent}
            </View>
            
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
