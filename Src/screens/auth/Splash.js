/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Splash = () => {
  const navigation = useNavigation();
  const scale = useSharedValue(0.5);
  // Trigger animation and navigation
  useEffect(() => {
    scale.value = withTiming(1, {duration: 3000});
    const timeout = setTimeout(() => {
      navigation.replace('DrawarNavigator'); // Replace with your target screen name
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation, scale]);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/Logo1.png')}
        style={[styles.logo, animatedStyle]} // Apply animated style
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
