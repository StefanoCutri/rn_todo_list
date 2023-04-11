import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);


  const handleTextChange = (textInput) => {
    setText(textInput)
  }

  const addGoal = () => {
    if (text.length > 0) {
      setGoals(prev => [...prev, text])    
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inpuContainer}>
        <TextInput placeholder='Enter your goals for this year!' onChangeText={handleTextChange}/>
        <Button title='Add Goal' onPress={addGoal}/>
      </View>
      <View style={styles.goalsContainer}>
      <Text>List of goals...</Text>
        {
          goals.map((goal, i) => (
            <Text key={i}>{goal}</Text>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    width: '80%',
    justifyContent: 'space-between'
  },
  goalsContainer: {
    flex: 5
  }
});
