import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

export const GoalInput = ({ addGoal, isModalOpen, closeModal }) => {
  const [text, setText] = useState("");
  const handleTextChange = (textInput) => {
    setText(textInput);
  };

  const handleAddGoal = () => {
    if (text.length > 0) {
      addGoal(text);
    }
    setText("");
  };

  return (
    <Modal visible={isModalOpen} animationType="fade">
      <View style={styles.inpuContainer}>
        <TextInput
          placeholder="Enter your goals for this year!"
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={text}
        />
        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inpuContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "85%",
    marginRight: 8,
    padding: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 20,
  },
});
