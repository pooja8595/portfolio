import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Awards = () => {
  return (
    <View style={styles.mainContainer}>
      <Animatable.Image
        animation="zoomIn"
        duration={2000}
        source={require('../Assets/portfolios.png')}
        style={{
          width: "67%",
          height: "28%",
          resizeMode: 'contain'
        }}
      />
    </View>
  )
}

export default Awards

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
})
