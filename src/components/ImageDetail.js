import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({imageSrc, imageTitle, likes}) => {
  return <View>
    <Image source={imageSrc} />
    <Text>{imageTitle}</Text>
    <Text>Likes - {likes}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default ImageDetail;