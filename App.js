import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('')

  const handleTextChange = (textInput) => {
    setText(textInput)
  }

  const addGoal = () => {
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inpuContainer}>
        <TextInput placeholder='Enter your goals for this year!' onChangeText={handleTextChange}/>
        <Button title='Add Goal' onPress={addGoal}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
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
