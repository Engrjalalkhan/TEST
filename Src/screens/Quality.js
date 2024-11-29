/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Quality = () => {
  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.QualitySection}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/icons/paper.jpg')}
              style={styles.icon}
            />
            <Text style={styles.QualityTitle}>Quality Statments</Text>
          </View>

          <Text style={styles.QualityText}>
            TRZ Technologies believes ‘A well trained motivated Employee results
            in a high Customer Satisfaction through better Quality of services.’
            Therefore, we provide our employees equal opportunities in a
            friendly and competitive environment to develop their skills and
            improve the quality of their work
          </Text>
          <Text style={styles.QualityText}>
            We welcome and value employee feedback in all areas of work. We
            believe in fact based management that values all the employees on
            the basis of their performance and discourage all the racial and
            gender biasness.
          </Text>
          <Text style={styles.QualityText}>
            We believe that there is always a better way to do things. And our
            belief encourages us to find fresh and better ways and services to
            satisfy our customers at minimal costs.
          </Text>
        </View>
        <Footer/>
    </View>
  );
};

export default Quality;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
    QualitySection: {
        padding: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      },
      QualityTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingTop:10,
      },
      QualityText: {
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
