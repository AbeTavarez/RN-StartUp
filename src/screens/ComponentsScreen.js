import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = `Abraham`
  const msg = <Text>Nice to see you again</Text>

  return (
    <View>
      <Text>Components Screen</Text>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeader}>My name is {name}!</Text>
      {msg}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
   fontSize: 30
  },
  subHeader: {
    fontSize: 20
  }
})


export default ComponentsScreen