import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

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
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter your goals for this year!"
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={text}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={handleAddGoal}
              color={"#e63946"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color={"#e63946"} />
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
    borderBottomWidth: 1,
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "85%",
    marginRight: 8,
    padding: 8,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 20,
  },
});
