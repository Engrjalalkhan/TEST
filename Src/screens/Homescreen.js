import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Swapimage from '../Components/Swapimage';
import Footer from '../Components/Footer';
// import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Header/>
    <Swapimage/>
      <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>
            Experienced Leadership That Cultivates Creative Innovation To
            Achieve Excellence. TRZ Technologies is led by a team of industry
            professionals, each of whom has spent the greater part of his or her
            professional ...
          </Text>
          <TouchableOpacity
            style={styles.readMoreButton}
            // onPress={() => navigation.navigate('About')}
            >
            <Text style={styles.readMoreText}>
              Read more{' >'}
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Technology Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technology</Text>
          <Text style={styles.sectionText}>
            Technology Works When It Streamlines Development and Maximizes
            Productivity & Quality. TRZ Technologies has always been about
            enabling both our people and our applications/games to achieve their
            full ...
          </Text>
          <TouchableOpacity
            style={styles.readMoreButton}
            // onPress={() => navigation.navigate('Technology')}
            >
            <Text style={styles.readMoreText}>
              Read more{' >'}
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quality Statement Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quality Statement</Text>
          <Text style={styles.sectionText}>
            TRZ Technologies believes ‘A well trained motivated Employee results
            in a high Customer Satisfaction through better Quality of services.’
            Therefore, we provide our employees equal opportunities ...
          </Text>
          <TouchableOpacity
            style={styles.readMoreButton}
            // onPress={() => navigation.navigate('Quality')}
            >
            <Text style={styles.readMoreText}>
              Read more{' >'}
              {' >'}
            </Text>
          </TouchableOpacity>
        </View>
        <Footer/>
    </View>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%'
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 30,
    color: 'Darkgray',
    paddingTop: 20,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    padding: 10,
    textAlign: 'justify',
  },
  readMoreButton: {
    backgroundColor: 'black',
    height: 30,
    width: 120,
    alignSelf: 'center',
    borderRadius: 7,
  },
  readMoreText: {
    color: 'white',
    alignSelf: 'center',
    padding: 5,
  },
});

