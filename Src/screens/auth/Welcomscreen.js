import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image
          source={require('../../assets/images/palsom.png')} // Replace with your logo
          style={styles.smallLogo}
        />
        <Text style={styles.introText}>Palsome</Text>
      </View>

      {/* Big logo and text */}
      <Image
        source={require('..//../assets/images/onboard.jpg')} // Replace with your big logo
        style={styles.bigLogo}
      />
      <Text style={styles.descriptionText}>
        Discover the best features and start your journey with us!
      </Text>

      {/* Additional Text */}
      <Text style={styles.subText}>Join now or sign in to get started.</Text>

      {/* Text Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textButton}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  smallLogo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  introText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    left:10,
  },
  bigLogo: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  subText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  textButton: {
    fontSize: 18,
    color: '#0041c2',
    marginHorizontal: 15,
  },
});
