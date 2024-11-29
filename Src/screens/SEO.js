/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const SEO = () => {
  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.SEOSection}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/icons/paper.jpg')}
              style={styles.icon}
            />
            <Text style={styles.SEOTitle}>SEO</Text>
          </View>
          <Text style={[styles.SEOText, {fontWeight: 'bold'}]}>
            Search Engine Optimization (SEO)
          </Text>
          <Text style={styles.SEOText}>
            Today we are in a Digital World; everything is being digital thanks
            to Internet. Internet is one of the best media for advertisement in
            anyway. If you run small business or have big industry or you are
            running your company website than you can promote your business
            online to attract a lot of clients. A corporate website increases
            visibility of your businesses. If your site is advertised on
            Internet, it will certainly draw so many visitors in contrast to
            other marketing options. As much as visitors visit the website its
            visibility will augment accordingly. You can boost visitors on your
            website with the help of promotion services by selecting a SEO
            (Search engine optimization) Services Provider.
          </Text>
          <Text style={[styles.SEOText, {fontWeight: 'bold'}]}>
            Search Engine Marketing (SEM/PPC)
          </Text>
          <Text style={styles.SEOText}>
            In a fast changing highly competitive world .marketers are working
            untiringly to rank higher in the search engines, to put up their
            brands by means of social media and to turn clicks into a dollar
            sign. SEM (Search engine marketing) Services are at the forefront of
            Internet marketing world. SEM (Search engine marketing) Services
            have a proven record for getting businesses top search rankings and
            considerably more traffic. SEM (Search engine marketing) Services
            have done it for big brands like as well as smaller firms. SEM
            (Search engine marketing) Services do this for their clients by
            attaining top rankings for tremendously competitive keywords.
          </Text>
          <Text style={styles.SEOText}>
            • Google Adwords Text Advertising
          </Text>
          <Text style={styles.SEOText}>• Google Display Advertising</Text>
        </View>
        <Footer/>
    </View>
  );
};

export default SEO;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
    SEOSection: {
    padding: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  SEOTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
  },
  SEOText: {
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
