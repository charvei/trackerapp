import React, { useState, useEffect } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ActivityEntry({navigation, ...props}) {
    return (
        <View
            key={props.activity.id}
            style={styles.activityItemContainer}
        >  
            <Text>{props.activity.name}</Text>
            <View style={styles.activityActionContainer}>
                <View style={styles.activityActionButtons}>
                    <Button
                        title="Record"
                        onPress={() => props.onRecordEventPress(props.activity)}
                    />
                </View>
                <View style={styles.activityActionButtons}>
                    <Button
                        title="Graph"
                        onPress={() => {
                            navigation.navigate('ActivityStats', {
                                activity: props.activity
                            })}
                        }
                    />
                </View>
                <View style={styles.activityActionButtons}>
                    <Button title="X" onPress={() => props.onDeleteActivityPress(props.activity)}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    activityItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    activityActionContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    activityActionButtons: {
        paddingRight: 5
    }
});
