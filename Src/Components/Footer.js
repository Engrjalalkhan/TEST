/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';
import {contentData} from './content';

const Footer = () => {
  const navigation = useNavigation();
  const [showWebView, setShowWebView] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [filteredData, setFilteredData] = useState(null); // State to hold filtered data

  // Filter content based on search query
  const handleSearch = query => {
    setSearchQuery(query);
    if (query) {
      const filtered = contentData.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.some(para =>
            para.toLowerCase().includes(query.toLowerCase()),
          ),
      );
      setFilteredData(filtered.length > 0 ? filtered : null);
    } else {
      setFilteredData(null);
    }
  };
  // Function to highlight matched text
  const highlightText = text => {
    if (!searchQuery) {
      return <Text>{text}</Text>;
    }
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi')); // Split text by search query
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <Text key={index} style={styles.highlightedText}>
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      ),
    );
  };

  const openSocialMedia = url => {
    Linking.openURL(url); // Opens the URL in the default browser
  };

  return (
    <View style={styles.container}>
      {showWebView ? (
        <WebView
          source={{uri: 'https://www.trztechnologies.com'}}
          style={{flex: 1}}
          onNavigationStateChange={navState => {
            if (!navState.canGoBack) {
              setShowWebView(false); // Close the WebView if the back button is pressed at the root URL
            }
          }}
        />
      ) : (
        <>
          {/* Display filtered data only when search is done */}
          {filteredData && filteredData.length > 0 && (
            <View style={styles.filteredContent}>
              {filteredData.map((item, index) => (
                <View key={index} style={styles.filteredItem}>
                  <Text style={styles.filteredItemTitle}>
                    {highlightText(item.title)}
                  </Text>
                  {item.description.map((para, paraIndex) => (
                    <Text
                      key={paraIndex}
                      style={styles.filteredItemDescription}>
                      {highlightText(para)}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          )}

          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <Text style={styles.text}>⋮⋮⋮⋮</Text>
            <Text style={styles.text}>TRZ Technologies</Text>
          </View>
          {/* Navigation buttons */}
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} About Us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Contact Us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Projects
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Testimonials')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Testimonials
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <Text style={styles.text}>⋮⋮⋮⋮</Text>
            <Text style={styles.text}>TRZ Technologies</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('SEO')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>{'> '} SEO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Technology')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Technology
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Quality')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Quality Statement
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Testimonials')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Testimonials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
            <Text style={[styles.txt, {textAlign: 'center'}]}>
              {'> '} Projects
            </Text>
          </TouchableOpacity>

          {/* Search Box */}
          <Text style={[styles.txt, {marginTop: 10, paddingLeft: 160}]}>
            Search for :
          </Text>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Enter keywords..."
              style={styles.input}
              value={searchQuery}
              onChangeText={handleSearch} // Call handleSearch on text change
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerBottom}>
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                onPress={() =>
                  openSocialMedia('https://trztechnologies.com/#')
                }>
                <MaterialCommunityIcons
                  name="twitter"
                  size={30}
                  color="#fff"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  openSocialMedia('https://facebook.com/trztechnologies')
                }>
                <MaterialCommunityIcons
                  name="facebook"
                  size={30}
                  color="#fff"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setShowWebView(true)}>
              <Text style={styles.copyright}>© 2024 TRZ Technologies</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373A3D',
    width: '100%',
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
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    textAlign: 'justify',
    right: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    width: '60%',
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
  filteredContent: {
    padding: 20,
    bottom: 50,
    backgroundColor: 'white',
  },
  filteredItem: {
    marginBottom: 10,
  },
  filteredItemTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  filteredItemDescription: {
    fontSize: 16,
    color: 'black',
    padding: 10,
  },
  highlightedText: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  },
});
