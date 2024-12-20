/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { useSearch } from './SearchContext'; // Import the useSearch hook
import { contentData } from './content';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Linking,
  BackHandler,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
  const navigation = useNavigation();
  const { searchQuery, setSearchQuery, setFilteredData } = useSearch();
  const [tempQuery, setTempQuery] = useState('');
  const [inAppMode, setInAppMode] = useState(false); // Track if user is in app mode
  const [backPressCount, setBackPressCount] = useState(0); // Track back button presses

  // Function to handle filtering when button is clicked
  const handleSearch = () => {
    setSearchQuery(tempQuery);
    if (tempQuery) {
      const filtered = contentData.filter(
        (item) =>
          item.title.toLowerCase().includes(tempQuery.toLowerCase()) ||
          item.description.some((para) =>
            para.toLowerCase().includes(tempQuery.toLowerCase())
          )
      );
      setFilteredData(filtered.length > 0 ? filtered : null);
    } else {
      setFilteredData(null);
    }
  };

  const clearSearch = () => {
    setTempQuery('');
    setSearchQuery('');
    setFilteredData(null);
  };

  const openSocialMedia = (url) => {
    Linking.openURL(url);
  };

  // Function to handle clicking on the copyright text
  const handleClickCopyright = () => {
    setInAppMode(true); // Set the app to in-app mode
    setBackPressCount(0); // Reset back press count to prevent immediate close
    // Navigate to Home to simulate a refresh
    navigation.navigate('Home');
  };

  // Handle back button press behavior
  useEffect(() => {
    if (inAppMode) {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        if (backPressCount === 0) {
          setBackPressCount(1); // Increment the count on first press
          // Simulate a refresh by navigating to the Home screen
          navigation.navigate('Home');
          return true; // Prevent the default behavior (app close)
        } else if (backPressCount === 1) {
          // On second back press, allow the app to close
          setInAppMode(false); // Exit in-app mode
          setBackPressCount(0); // Reset back press count
          return false; // Allow the app to close
        }
        return false; // Default behavior
      });

      // Cleanup on unmount
      return () => backHandler.remove();
    }
  }, [inAppMode, backPressCount, navigation]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <Text style={styles.text}>⋮⋮⋮⋮</Text>
        <Text style={styles.text}>TRZ Technologies</Text>
      </View>

      {/* Navigation buttons */}
      <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} About Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Contact Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Projects
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Testimonials')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Testimonials
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <Text style={styles.text}>⋮⋮⋮⋮</Text>
        <Text style={styles.text}>Over Services</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SEO')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} SEO
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Technologys')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Technology
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('QualityStatment')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Quality Statement
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Testimonials')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Testimonials
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
        <Text style={[styles.txt, { textAlign: 'center' }]}>
          {'> '} Projects
        </Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter keywords..."
            style={styles.input}
            value={tempQuery}
            onChangeText={setTempQuery}
          />
          {tempQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearIcon}>
              <MaterialCommunityIcons name="close-circle" size={20} color="#444" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerBottom}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => openSocialMedia('https://trztechnologies.com/#')}>
            <MaterialCommunityIcons name="twitter" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openSocialMedia('https://facebook.com/trztechnologies')}>
            <MaterialCommunityIcons name="facebook" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleClickCopyright}>
          <Text style={styles.copyright}>© 2024 TRZ Technologies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373A3D',
    width: '100%',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 20,
  },
  txt: {
    fontSize: 16,
    color: 'white',
    paddingTop: 10,
    textAlign: 'justify',
    right: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
  },
  inputContainer: {
    position: 'relative',
    width: '60%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    paddingRight: 35, // Space for the clear icon
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  searchButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerBottom: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#555',
    paddingTop: 10,
  },
  copyright: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
    paddingTop: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 15,
  },
});
