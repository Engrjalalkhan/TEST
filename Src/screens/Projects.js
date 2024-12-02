/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView, requireNativeComponent} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Projects = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <View style={styles.ProjectSection}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/icons/paper.jpg')}
              style={styles.icon}
            />
            <Text style={styles.ProjectTitle}>Projects</Text>
          </View>
          <Image
            style={{
              width: 320,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/image.png')}
          />
          <Text style={styles.ProjectText}>Repair and Maintenance System</Text>
          <Image
            style={{
              width: 320,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/image1.png')}
          />
          <Text style={styles.ProjectText}>Social Media Platform</Text>
          <Image
            style={{
              width: 320,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/image2.png')}
          />
          <Text style={styles.ProjectText}>Mini ERP</Text>
          <Image
            style={{
              width: 320,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/image3.png')}
          />
          <Text style={styles.ProjectText}>Social Media Banners</Text>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Projects;

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
  ProjectSection: {
    padding: 30,
    bottom:80,
  },
  ProjectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
  },
  ProjectText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'justify',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
