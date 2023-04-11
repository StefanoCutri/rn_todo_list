import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (text) => {
    setGoals((prev) => [
      ...prev,
      { text: text, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      {goals.length > 0 ? (
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => <GoalItem item={item.text} />}
            keyExtractor={(item) => item.key}
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
