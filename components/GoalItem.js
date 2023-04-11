import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const GoalItem = ({ item, onDeleteItem }) => {
  console.log(item);
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={() => onDeleteItem(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>· {item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    justifyContent: "flex-start",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
    fontSize: 18,
  },
});
