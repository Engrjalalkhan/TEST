/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  requireNativeComponent,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useSearch} from '../Components/SearchContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Projects = () => {
  const {searchQuery, filteredData} = useSearch();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        {!searchQuery || !filteredData ? (
          <>
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
              <Text style={styles.ProjectText}>
                Repair and Maintenance System
              </Text>
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
          </>
        ) : (
          // If there is filtered data, show it instead of default content
          <View style={styles.filteredContent}>
            {filteredData.map((item, index) => (
              <View key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 20,
                    paddingTop: 20,
                    right: 15,
                  }}>
                  <MaterialCommunityIcons
                    name={'magnify'}
                    color={'black'}
                    size={30}
                    style={{paddingTop: 5}}
                  />
                  <Text style={[styles.filterTitle, {fontSize: 24}]}>
                    Search results for: {item.title}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assets/icons/paper.jpg')}
                    style={{width: 50, height: 50}}
                  />
                  <Text style={[styles.filterTitle, {paddingTop: 10}]}>
                    {item.title}
                  </Text>
                </View>
                {item.description.map((para, paraIndex) => (
                  <Text key={paraIndex} style={styles.filterText}>
                    {para}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
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
  filteredContent: {
    marginBottom: 20,
    padding: 30,
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterText: {
    fontSize: 16,
    paddingTop: 10,
  },
});
