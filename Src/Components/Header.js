import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    if (isMenuVisible) {
      setMenuVisible(false);
    }
  };

  return (
    <>
      {/* Header Section */}
      <Image
          source={require('../assets/images/Logo1.png')}
          style={styles.logo}
        />
      <View style={styles.headerContainer}>

        <View style={styles.nav}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={toggleMenu}
          >
            <MaterialCommunityIcons name="menu" color={'white'} size={35} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Menu Modal */}
      <Modal
        visible={isMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay}>
            <View style={styles.dropdownMenu}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.menuItem}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text style={styles.menuItem}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Technology')}
              >
                <Text style={styles.menuItem}>Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Quality')}
              >
                <Text style={styles.menuItem}>Quality statements</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SEO')}>
                <Text style={styles.menuItem}>SEO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Projects')}
              >
                <Text style={styles.menuItem}>Projects</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Testimonials')}
              >
                <Text style={styles.menuItem}>Testimonials</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <Text style={styles.menuItem}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    bottom:50,
  },
  nav: {
    flexDirection:'row-reverse',
    backgroundColor: '#fff',
    padding: 5,
    shadowColor: '#333', // Gray shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, // Android shadow
    width:370,
    borderRadius:5,
    marginBottom:20,
    bottom:80,
  },
  menuButton: {
    backgroundColor: '#3a3a3a',
    borderRadius: 5,
    padding: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dropdownMenu: {
    marginTop: 180, // Adjust based on your header's position
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: '92%',
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
