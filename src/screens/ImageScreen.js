import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <ImageDetail imageTitle='Forest'/>
    <ImageDetail imageTitle='Beach'/>
    <ImageDetail imageTitle='Mountain'/>
  </View>
}
const styles = StyleSheet.create({})
export default ImageScreen;

