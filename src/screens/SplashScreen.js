// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000); // Navigate to Home screen after 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Insert splash screen image here */}
      <Image source={require('../../assets/homebackground.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#012622', // Primary color
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
