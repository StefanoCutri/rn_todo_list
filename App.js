import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);


  const handleTextChange = (textInput) => {
    setText(textInput)
  }

  const addGoal = () => {
    if (text.length > 0) {
      setGoals(prev => [...prev, 
        {text: text, key: Math.random().toString()}
      ])    
    }
  }

  const GoalItem = ({item}) => {
  return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{item}</Text>
  </View>
  )
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.inpuContainer}>
        <TextInput placeholder='Enter your goals for this year!' style={styles.textInput} onChangeText={handleTextChange}/>
        <Button title='Add Goal' onPress={addGoal}/>
      </View>

      {
        goals.length > 0
        ?
        <View style={styles.goalsContainer}>
        <FlatList 
        data={goals}
        renderItem={ ({item}) => (<GoalItem item={item.text}/>)}
        keyExtractor={(item) => item.id}
        />
       
        </View>
        :
        <View style={styles.goalsContainer}>
          <Text>Start your journey!</Text>
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inpuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
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
