import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoal = (text) => {
    setGoals((prev) => [...prev, { text: text, id: Math.random().toString() }]);
    closeModal();
  };

  const onDeleteItem = (id) => {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={showModal} />
      {isModalVisible && (
        <GoalInput
          visible={isModalVisible}
          addGoal={addGoal}
          closeModal={closeModal}
        />
      )}
      {goals.length > 0 ? (
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem item={item} onDeleteItem={onDeleteItem} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View style={styles.goalsContainer}>
          <Text>Start your journey!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inpuContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
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
