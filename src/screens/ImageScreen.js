import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <ImageDetail imageTitle='Forest' imageSrc={ require('../../assets/forest.jpg')} likes={125}/>
    <ImageDetail imageTitle='Beach' imageSrc={require('../../assets/beach.jpg')} likes={46}/>
    <ImageDetail imageTitle='Mountain' imageSrc={require('../../assets/mountain.jpg')} likes={83}/>
  </View>
}
const styles = StyleSheet.create({})
export default ImageScreen;

