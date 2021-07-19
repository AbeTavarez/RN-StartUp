import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //console.log(props)
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button
      onPress={() => props.navigation.navigate('Componentns')}
      title='Components Screen' />
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>List Demo</Text>
      <Text>List Demo</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
