// src/components/Header.js
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/images/Logo1.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <MaterialCommunityIcons name="menu" color={'white'} size={35} />
      </TouchableOpacity>
      {isMenuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.menuItem}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Technology')}>
            <Text style={styles.menuItem}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Quality')}>
            <Text style={styles.menuItem}>Quality statments</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SEO')}>
            <Text style={styles.menuItem}>SEO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
            <Text style={styles.menuItem}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Testimonials')}>
            <Text style={styles.menuItem}>Testimonials</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.menuItem}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  menuButton: {
    position: 'absolute',
    top: 150,
    left: -110,
    backgroundColor: '#3a3a3a',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 200,
    left: -90,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 100,
    width: '90%',
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Header;
