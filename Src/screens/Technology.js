/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Technology = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.TechnologySection}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/icons/paper.jpg')}
            style={styles.icon}
          />
          <Text style={styles.TechnologyTitle}>Technology</Text>
        </View>

        <Text style={[styles.TechnologyText, {fontSize: 18}]}>
          Technology Works When It Streamlines Development and Maximizes
          Productivity & Quality
        </Text>
        <Text style={styles.TechnologyText}>
          TRZ Technologies has always been about enabling both our people and
          our applications/games to achieve their full potential. Over the
          years, we have engineered a complete framework for application/game
          development that exploits the strengths of industry standard software
          and overcomes its inherent limitations with proprietary tools and
          technologies.
        </Text>
        <Text style={styles.TechnologyText}>
          The result is our own truly unique and advanced hybrid system that
          facilitates the rapid development and deployment of high quality
          applications/games across multiple platforms.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Agile Development: Scrum
        </Text>
        <Text style={styles.TechnologyText}>
          The Scrum process sets down a framework for organized agile
          development. It enforces daily communication within the development
          team and sets clear and manageable short-term goals. Every week to two
          weeks, the team goes through a full development cycle to produce
          testable subsets of the overall functional requirements. This creates
          a continuous feedback loop, which allows the project to adapt to
          changes, maintain the schedule and minimize risk.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          .NET Expertise
        </Text>
        <Text style={styles.TechnologyText}>
          TRZ Technologies has extensive experience with product and application
          development using .NET technologies. Our experience encompasses many
          domains including Repair & Maintenance, marketing applications and
          customer service portals.
        </Text>
        <Text style={styles.TechnologyText}>
          TRZ Technologies has trained developers who can help you with:
        </Text>
        <Text style={styles.TechnologyText}>
          • Scalable web-based products and applications using HTML5/CSS as well
          JQuery
        </Text>
        <Text style={styles.TechnologyText}>
          • Web services using .NET framework
        </Text>
        <Text style={styles.TechnologyText}>
          • Migrate legacy applications e.g. from ASP to ASP.NET
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Enterprise Resource Planning
        </Text>
        <Text style={styles.TechnologyText}>
          An ERP solution such as Oracle isn’t just the foundation of your
          software technology infrastructure, it’s deeply intertwined with your
          business. ERP’s financial tools allow companies to successfully
          maintain financial information like that of the assets, accounts,
          budgets and cash. ERP assists an organization in effectively managing
          the internal and external factors affecting it, while enhancing
          resource efficiency by eliminating time consuming activities and
          repetitive tasks.
        </Text>
        <Text style={styles.TechnologyText}>
          ERP also provides an important insight into organization’s materials
          management. It successfully automates the process of buying materials
          and maintaining them. There are modules track the purchased supplies
          and also calculate how the materials should be distributed. Moreover,
          you can effortlessly predict the demand of the market based on the
          history, economic statistics and sales data. This facilitates a
          company in their decision-making process for when a product production
          and provides a powerful competitive advantage by reducing “time to
          market” the products and/or services.
        </Text>
        <Text style={styles.TechnologyText}>
          With our strong expertise in large global ERP implementations, experts
          at TRZ Technologies can execute the process using the cross functional
          knowledge of various market verticals. Our qualified business
          analysts, software engineers, and subject matter experts have prior
          experience of successful product implementations using a variety of
          ERP systems and industry specific solutions.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Mobile Development
        </Text>
        <Text style={styles.TechnologyText}>
          TRZ Technologies build high-performing mobile applications for native
          iOS (iPhone, iPod Touch & iPad) and Android (HTC, Samsung, etc.)
          coding as well as cross-platform (HTML5) development.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Hybrid Apps
        </Text>
        <Text style={styles.TechnologyText}>
          For Hybrid App development TRZ Technologies is using React Native
          framework. React Native is a prominent open-source project of
          Facebook. It is ideal for developing mobile apps by using the popular
          and fast-growing React library.
        </Text>
        <Text style={styles.TechnologyText}>
          TRZ Technologies has transformed the mobile app development with
          higher speed and performance.
        </Text>
        <Text style={styles.TechnologyText}>
          React Native combines the best parts of native development with React,
          a best-in-class JavaScript library for building user interfaces.
        </Text>
        <Text style={styles.TechnologyText}>
          In 2018, React Native had the 2nd highest number of contributors for
          any repository in GitHub. Today, React Native is supported by
          contributions from individuals and companies around the world
          including Callstack, Expo, Infinite Red, Microsoft and Software
          Mansion.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Native Development For Everyone
        </Text>
        <Text style={[styles.TechnologyText, {}]}>
          React Native lets you create truly native apps and doesn’t compromise
          your users’ experiences. It provides a core set of platform agnostic
          native components like View, Text, and Image that map directly to the
          platform’s native UI building blocks.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Fast Refresh
        </Text>
        <Text style={[styles.TechnologyText, {}]}>
          See your changes as soon as you save. With the power of JavaScript,
          React Native lets you iterate at lightning speed. No more waiting for
          native builds to finish. Save, see, repeat.
        </Text>
        <Text style={[styles.TechnologyText, {fontWeight: 'bold'}]}>
          Web Application Development
        </Text>
        <Text style={[styles.TechnologyText, {}]}>
          From a feature packed marketing campaign, to a simple startup
          solution, our team can build it. We have built large systems of online
          and offline desktop and web applications connected to an online
          server. The aim is to create a seamless user experience across all
          platforms that accommodates the ease-of-use for all stakeholders
        </Text>
      </View>
      <Footer />
    </View>
  );
};

export default Technology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  TechnologySection: {
    padding: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  TechnologyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
  },
  TechnologyText: {
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
