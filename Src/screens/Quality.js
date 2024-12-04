/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useSearch} from '../Components/SearchContext';

const Quality = () => {
  const {searchQuery, filteredData} = useSearch();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        {!searchQuery || !filteredData ? (
          <>
            <View style={styles.QualitySection}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/icons/paper.jpg')}
                  style={styles.icon}
                />
                <Text style={styles.QualityTitle}>Quality Statments</Text>
              </View>

              <Text style={styles.QualityText}>
                TRZ Technologies believes ‘A well trained motivated Employee
                results in a high Customer Satisfaction through better Quality
                of services.’ Therefore, we provide our employees equal
                opportunities in a friendly and competitive environment to
                develop their skills and improve the quality of their work
              </Text>
              <Text style={styles.QualityText}>
                We welcome and value employee feedback in all areas of work. We
                believe in fact based management that values all the employees
                on the basis of their performance and discourage all the racial
                and gender biasness.
              </Text>
              <Text style={styles.QualityText}>
                We believe that there is always a better way to do things. And
                our belief encourages us to find fresh and better ways and
                services to satisfy our customers at minimal costs.
              </Text>
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

export default Quality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  QualitySection: {
    padding: 30,
    bottom: 80,
  },
  QualityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
  },
  QualityText: {
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
    bottom: 70,
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
