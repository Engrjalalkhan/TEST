import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars'; // Import Calendar
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [calendarVisible, setCalendarVisible] = useState(false);

  // Show and hide calendar modal
  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  // Handle date selection from the calendar
  const onDayPress = day => {
    setDob(day.dateString); // Format date as MM/DD/YYYY
    setCalendarVisible(false); // Close calendar after selecting date
  };

  // Input validation
  const validateForm = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    if (!password) newErrors.password = 'Password is required';

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const userData = {
      firstName,
      lastName,
      email,
      gender,
      dob,
      password,
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again');
    }
  };
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Splash'); // Navigate to a specific screen if no history
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleGoBack}>
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Hi!</Text>
      <Text style={styles.subtitle}>Create a new account</Text>

      <TextInput
        style={[styles.input, errors.firstName && styles.inputError]}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      {errors.firstName && (
        <Text style={styles.errorText}>{errors.firstName}</Text>
      )}

      <TextInput
        style={[styles.input, errors.lastName && styles.inputError]}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      {errors.lastName && (
        <Text style={styles.errorText}>{errors.lastName}</Text>
      )}

      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={itemValue => setGender(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

      <View style={styles.dateInputContainer}>
        <TextInput
          style={[styles.input, errors.dob && styles.inputError]}
          placeholder="MM/DD/YYYY"
          value={dob}
          editable={false}
        />
        <TouchableOpacity onPress={toggleCalendar}>
          <MaterialCommunityIcons
            name="calendar"
            size={30}
            color="blue"
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
      </View>
      {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Custom Calendar Modal */}
      {calendarVisible && (
        <View style={styles.calendarModal}>
          <Calendar
            style={styles.calendar}
            theme={{
              selectedDayBackgroundColor: 'blue',
              selectedDayTextColor: 'white',
              todayTextColor: 'blue',
              arrowColor: 'blue',
              monthTextColor: 'blue',
            }}
            onDayPress={onDayPress}
            markedDates={{
              [dob]: {
                selected: true,
                selectedColor: 'blue',
                selectedTextColor: 'white',
              },
            }}
            // Enabling the scrollable year feature
            hideExtraDays={true}
            markingType={'simple'}
            enableMonthSelector={true}
            showYearPicker={true}
            scrollEnabled={true} // To allow scrolling of the calendar months and years
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: 'red',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  dateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  calendarIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarModal: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 999,
  },
  calendar: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
});

export default SignUpScreen;
