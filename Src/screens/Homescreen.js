import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Swapimage from '../Components/Swapimage';
import Footer from '../Components/Footer';
import {useSearch} from '../Components/SearchContext';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const {searchQuery, filteredData} = useSearch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Swapimage />
        {!searchQuery || !filteredData ? (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Us</Text>
              <Text style={styles.sectionText}>
                Experienced Leadership That Cultivates Creative Innovation To
                Achieve Excellence. TRZ Technologies is led by a team of
                industry professionals, each of whom has spent the greater part
                of his or her professional ...
              </Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => navigation.navigate('About')}>
                <Text style={styles.readMoreText}>Read more{' >>'}</Text>
              </TouchableOpacity>
            </View>

            {/* Technology Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Technology</Text>
              <Text style={styles.sectionText}>
                Technology Works When It Streamlines Development and Maximizes
                Productivity & Quality. TRZ Technologies has always been about
                enabling both our people and our applications/games to achieve
                their full ...
              </Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => navigation.navigate('Technology')}>
                <Text style={styles.readMoreText}>Read more{' >>'}</Text>
              </TouchableOpacity>
            </View>

            {/* Quality Statement Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quality Statement</Text>
              <Text style={styles.sectionText}>
                TRZ Technologies believes ‘A well trained motivated Employee
                results in a high Customer Satisfaction through better Quality
                of services.’ Therefore, we provide our employees equal
                opportunities ...
              </Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => navigation.navigate('Quality')}>
                <Text style={styles.readMoreText}>Read more{' >>'}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          // If there is filtered data, show it instead of default content
          <View style={styles.filteredContent}>
            {filteredData.map((item, index) => (
              <View key={index}>
                <Text style={styles.filterTitle}>{item.title}</Text>
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

export default Homescreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  section: {
    alignItems: 'centers',
  },
  sectionTitle: {
    fontSize: 30,
    paddingTop: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    padding: 10,
  },
  readMoreButton: {
    backgroundColor: 'black',
    height: 35,
    width: 120,
    alignSelf: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  readMoreText: {
    color: 'white',
    alignSelf: 'center',
    padding: 7,
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
