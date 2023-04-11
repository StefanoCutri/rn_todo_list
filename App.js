import { useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
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
         <View style={styles.goalsContainer}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Start your journey!</Text>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20, marginBottom: 40}}>Add new goals.</Text>
      {isModalVisible && (
        <GoalInput
          visible={isModalVisible}
          addGoal={addGoal}
          closeModal={closeModal}
        />
      )}
      {goals.length > 0 && (
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem item={item} onDeleteItem={onDeleteItem} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )
      }
        </View>
        <View style={styles.addBtn}>
          <Pressable onPress={showModal}>
          <Ionicons name="add-circle-outline" size={80} color="#e63946" />
          </Pressable>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#2b2d42'
  },
  goalsContainer: {
    flex: 5,
    alignItems: 'center'
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
  addBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});
