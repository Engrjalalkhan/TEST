/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactForm from '../Components/Form';
import ContactInformation from '../Components/Contactinfo';
import {useSearch} from '../Components/SearchContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Contact = () => {
  const {searchQuery, filteredData} = useSearch();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        {!searchQuery || !filteredData ? (
          <>
            <View style={styles.ContactSection}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/icons/paper.jpg')}
                  style={styles.icon}
                />
                <Text style={styles.ContactTitle}>Contact Us</Text>
              </View>

              <Text style={[styles.ContactText, {fontSize: 20}]}>
                Let’s Get in Touch
              </Text>
              <Text style={styles.ContactText}>
                If you are interested in speaking with TRZ Technologies about an
                upcoming project, have a query about our services or even if you
                just want to say Hi, there are a number of ways we can make that
                happen. Filling out the form below would help us get the right
                person in touch with you, or you could simply send us an email.
                It’s totally your choice!
              </Text>
              <Text style={styles.ContactText}>
                Feel free to get in touch with us and we will be back in contact
                with you shortly.
              </Text>
              <ContactForm />
              <ContactInformation />
            </View>
          </>
        ) : (
          // If there is filtered data, show it instead of default content
          <View style={styles.filteredContent}>
            {filteredData.map((item, index) => (
              <View key={index}>
                <View style={{flexDirection: 'row', margin: 20, right: 15}}>
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

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  ContactSection: {
    padding: 30,
  },
  ContactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  ContactText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'auto',
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
