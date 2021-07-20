import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  //console.log(props)
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title='Components Screen' />
    <Button
      title='List'
      onPress={() => navigation.navigate('List')}
    />
    <Button
      title='Image Screen'
      onPress={() => navigation.navigate('Image')}
    />
    <Button
      title='Counter Demo'
      onPress={() => navigation.navigate('Counter')}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
