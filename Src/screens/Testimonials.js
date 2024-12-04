/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {useSearch} from '../Components/SearchContext';

const Testimonials = () => {
  const {searchQuery, filteredData} = useSearch();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        {!searchQuery || !filteredData ? (
          <>
            <View style={styles.TestimonailsSection}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/icons/paper.jpg')}
                  style={styles.icon}
                />
                <Text style={styles.TestimonailsTitle}>Testimonials</Text>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.quoteSymbol}>“</Text>
                  <Text style={styles.titleText}>
                    Charles J. Neff (President – MedServ International, Inc.)
                  </Text>
                </View>

                <View style={styles.contentContainer}>
                  <Image
                    source={{
                      uri: 'https://trztechnologies.com/wp-content/uploads/2016/03/Charles-150x150.jpg',
                    }} // Replace with your image URL
                    style={styles.profileImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.yearText}>Year 2015:</Text>
                    <Text style={styles.bodyText}>
                      You and the team are doing an excellent job managing our
                      fixes and change requests. I cannot stress to you enough
                      how much this affects the morale of my staff as we get
                      this ready to launch. I am impressed with how you are
                      embracing our change requests. Knowing you can find a
                      solution to a logical problem allows us some additional
                      free thinking to address our customers’ needs. Being able
                      to drill down into the captured data is a testament to the
                      database design.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.quoteSymbol}>“</Text>
                  <Text style={styles.titleText}>
                    Dr. Muhammad Arif Head of Department (Medical Oncology &
                    Hematology)
                  </Text>
                </View>

                <View style={styles.contentContainer}>
                  <Image
                    source={{
                      uri: 'https://trztechnologies.com/wp-content/uploads/2016/03/dr555-360x278-150x150.jpg',
                    }} // Replace with your image URL
                    style={styles.profileImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.bodyText}>
                      I ask TRZ Technologies to develop an application which
                      could tract the patient history and the treatment provided
                      to them. I was amazed to see the application developed
                      without much of my interaction. The team worked dedicated
                      and provided me the application as per the decided
                      schedule. The application is fulfilling my current needs
                      and I am quite satisfied with the output. I would
                      recommend this company as they are good both in
                      development and their customer service is outstanding.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.quoteSymbol}>“</Text>
                  <Text style={styles.titleText}>
                    Charles J. Neff (Vice President – MedServ International,
                    Inc.)
                  </Text>
                </View>

                <View style={styles.contentContainer}>
                  <Image
                    source={{
                      uri: 'https://trztechnologies.com/wp-content/uploads/2016/03/CharlesNeff-150x150.png',
                    }} // Replace with your image URL
                    style={styles.profileImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.yearText}>Year 2014:</Text>
                    <Text style={styles.bodyText}>
                      Having worked with the companies principles several years
                      ago I decided to come back to them for a new mission
                      critical vertical integration project. The professionalism
                      and attention to detail has resulted in TRZ Technologies
                      meeting of all project milestones on time with very high
                      quality deliverable. The team takes feedback seriously and
                      works with the client to assure complete satisfaction. TRZ
                      Technologies is highly recommended for your programming
                      needs.
                    </Text>
                  </View>
                </View>
              </View>
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

export default Testimonials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  TestimonailsSection: {
    padding: 30,
    bottom: 80,
  },
  TestimonailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Makes it circular
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  yearText: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 14,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  cardContainer: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    margin: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quoteSymbol: {
    fontSize: 28,
    color: 'gray',
    marginRight: 8,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    flexShrink: 1, // Makes the text wrap if too long
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
