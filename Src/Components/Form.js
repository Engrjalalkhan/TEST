import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// SuccessAlert Component
const SuccessAlert = ({ message = 'Processing completed', onClose }) => (
  <View style={styles.alertContainer}>
    <MaterialCommunityIcons name="check-circle" size={24} color="green" />
    <Text style={styles.alertText}>{message}</Text>
    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
      <MaterialCommunityIcons name="close" size={20} color="gray" />
    </TouchableOpacity>
  </View>
);

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    purpose: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false); // Alert visibility state

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setShowAlert(true); // Show success alert on form submission
  };

  return (
    <View style={styles.container}>
      {showAlert && (
        <SuccessAlert
          message="Your message has been sent successfully!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Contact *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your contact number"
          keyboardType="phone-pad"
          value={formData.contact}
          onChangeText={(text) => handleInputChange('contact', text)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Purpose *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.purpose}
            onValueChange={(itemValue) => handleInputChange('purpose', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select a purpose" value="" />
            <Picker.Item label="Mobile Game Development" value="Mobile Game Development" />
            <Picker.Item label="Mobile App Development" value="Mobile App Development" />
            <Picker.Item label="Web Development" value="Web Development" />
            <Picker.Item label="SEO" value="SEO" />
            <Picker.Item label="Graphics" value="Graphics" />
            <Picker.Item label="Consultation" value="Consultation" />
            <Picker.Item label="Software Testing and QA" value="Software Testing and QA" />
            <Picker.Item label="Custom Software Development" value="Custom Software Development" />
          </Picker>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Subject *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter subject"
          value={formData.subject}
          onChangeText={(text) => handleInputChange('subject', text)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Message *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter your message"
          multiline={true}
          numberOfLines={4}
          value={formData.message}
          onChangeText={(text) => handleInputChange('message', text)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    width:'100%',
    paddingTop:100,
    alignItems:'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    width: 100,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width:'40%',
    alignSelf:'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f9e6',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  alertText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'green',
  },
  closeButton: {
    marginLeft: 10,
  },
});

export default ContactForm;
