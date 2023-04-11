import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const GoalInput = ({ addGoal }) => {
  const [text, setText] = useState("");
  const handleTextChange = (textInput) => {
    setText(textInput);
  };

  const handleAddGoal = () => {
    if (text.length > 0) {
        addGoal(text);
    }
    setText('')
  };

  return (
    <View style={styles.inpuContainer}>
      <TextInput
        placeholder="Enter your goals for this year!"
        style={styles.textInput}
        onChangeText={handleTextChange}
        value={text}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inpuContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
