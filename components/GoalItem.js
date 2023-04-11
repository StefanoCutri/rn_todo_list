import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const GoalItem = ({item}) => {
  return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{item}</Text>
  </View>
  )
}


const styles = StyleSheet.create({
    goalItem: {
      padding: 8,
      margin: 6,
      backgroundColor: 'black',
      borderRadius: 6
    },
    goalText: {
      color: 'white'
    }
  });
