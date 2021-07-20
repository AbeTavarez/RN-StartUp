import React, { useState}from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.textDetails}>Current Count: { counter }</Text>
      <Button
        title='Increase'
        onPress={() => {
        setCounter(counter + 1)
      }}
      />

      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textDetails: {
    fontSize: 22,
    marginLeft: 120,
    marginTop: 15,
    marginBottom: 15,
  }
})

export default CounterScreen