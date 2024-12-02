/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactForm from '../Components/Form';
import ContactInformation from '../Components/Contactinfo';

const Contact = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
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
            person in touch with you, or you could simply send us an email. It’s
            totally your choice!
          </Text>
          <Text style={styles.ContactText}>
            Feel free to get in touch with us and we will be back in contact
            with you shortly.
          </Text>
          <ContactForm />
          <ContactInformation />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  ContactSection: {
    padding: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  ContactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
  },
  ContactText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
