import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const GoalItem = ({ item, onDeleteItem }) => {
    console.log(item);
  return (
    <Pressable onPress={() => onDeleteItem(item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 6,
    backgroundColor: "black",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
