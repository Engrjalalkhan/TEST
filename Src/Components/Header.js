import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.toggleDrawer(); // Open/close drawer
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
        <MaterialCommunityIcons name="menu" color="white" size={35} />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/Logo1.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    padding: 10,
    elevation: 5,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    right:150,
  },
  menuButton: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius:5,
  },
});

export default Header;
