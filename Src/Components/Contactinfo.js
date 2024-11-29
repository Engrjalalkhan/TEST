import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactInformation = () => {
  const contactDetails = [
    {
      title: 'Front Office Contact Information',
      address: '19208 Shandall Court Parkton, Maryland 21120',
      phone: '443-390-0015',
      email: 'info@OptimumDigitalTech.com',
    },
    {
      title: 'Contact Information',
      address: '304 A1 - Sheranwala Heights, Lahore',
      phone: '+92 300-400-3603',
      email: 'info@trztechnologies.com',
    },
  ];

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      {contactDetails.map((contact, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{contact.title}</Text>

          <View style={styles.row}>
            <MaterialCommunityIcons name="map-marker" size={20} color="#333" />
            <Text style={styles.text}>{contact.address}</Text>
          </View>

          <TouchableOpacity style={styles.row} onPress={() => handlePhonePress(contact.phone)}>
            <MaterialCommunityIcons name="phone" size={20} color="#333" />
            <Text style={styles.link}>{contact.phone}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => handleEmailPress(contact.email)}>
            <MaterialCommunityIcons name="email" size={20} color="#333" />
            <Text style={styles.link}>{contact.email}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  link: {
    marginLeft: 10,
    fontSize: 16,
    color: '#007BFF', // Blue color for links
    textDecorationLine: 'underline',
  },
});

export default ContactInformation;
