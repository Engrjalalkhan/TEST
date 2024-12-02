/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Components/Header'; // Updated Header component
import Footer from '../Components/Footer';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header is now responsible for closing the menu when clicked outside */}
        <Header />
        <View style={styles.aboutUsSection}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/icons/paper.jpg')} // Image path fix
              style={styles.icon}
            />
            <Text style={styles.aboutUsTitle}>About Us</Text>
          </View>

          <Text style={styles.aboutUsText}>
            Experienced Leadership That Cultivates Creative Innovation To
            Achieve Excellence.
          </Text>
          <Text style={styles.aboutUsText}>
            TRZ Technologies is led by a team of industry professionals, each of
            whom has spent the greater part of his or her professional life
            immersed in the IT industry. Their collective insight and knowledge
            has resulted in a business model that is uniquely their own. Their
            approach is to develop and deploy technology as a means to
            facilitate productivity, remove barriers, and enable highly skilled
            employees to express their creativity to its fullest extent.
          </Text>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  aboutUsSection: {
    padding: 30,
    bottom: 100,
  },
  aboutUsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 10,
  },
  aboutUsText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
