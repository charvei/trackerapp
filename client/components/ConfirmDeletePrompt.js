import React, { useState, useEffect } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

import * as ActivityClient from '../backend_client/ActivityClient'

export default function ConfirmDeletePrompt(props) {
    return (
        <View style={styles.confirmDeletePrompt}>  
            <View style={styles.confirmChoiceButton}>
                <Button 
                    title="Yes"
                    onPress={() => {
                        ActivityClient.deleteActivities(props.activity.id)
                        props.updateActivities()
                        props.closeModalFn()
                    }}
                />
            </View>
            <View style={styles.confirmChoiceButton}>
                <Button 
                    title="No"
                    onPress={() => props.closeModalFn()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    confirmDeletePrompt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    confirmChoiceButton: {
        width: "40%",
        paddingLeft: 5,
        paddingRight: 5
    }
});
