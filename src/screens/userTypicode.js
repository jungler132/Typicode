import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import usersData from '../../constants/users.json';
import Accordion from 'react-native-collapsible/Accordion';

const UserScreen = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderContent = item => {
    if (item.city) {
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Geo: lat: {item.geo?.lat} lng: {item.geo?.lng}
          </Text>
          <Text style={styles.contentText}>Street: {item.street}</Text>
          <Text style={styles.contentText}>Suite: {item.suite}</Text>
          <Text style={styles.contentText}>Zipcode: {item.zipcode}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>Bs: {item.bs}</Text>
          <Text style={styles.contentText}>
            Catch Phrase: {item.catchPhrase}
          </Text>
        </View>
      );
    }
  };

  const updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const renderHeader = item => {
    if (item.city) {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>City: {item.city}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>Company: {item.name}</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBlock}>
        <Text style={styles.topBlockTextStyle}>Users ({usersData.length})</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentStyle}
        style={styles.scrollViewStyle}>
        {usersData.map((item, index) => {
          return (
            <View key={index} style={styles.cardStyle}>
              <Text style={styles.cardTextStyle}>Name: {item.name}</Text>
              <Text style={styles.cardTextStyle}>
                Username: {item.username}
              </Text>
              <Text style={styles.cardTextStyle}>Phone: {item.phone}</Text>
              <Text style={styles.cardTextStyle}>Website: {item.website}</Text>
              <Text style={styles.cardTextStyle}>Email@: {item.email}</Text>
              <View>
                <Accordion
                  sections={[item.address, item.company]}
                  activeSections={activeSections}
                  renderHeader={renderHeader}
                  renderContent={renderContent}
                  onChange={updateSections}
                  sectionContainerStyle={styles.sectionContainerStyle}
                  duration={2000}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#D3D3D3',
  },
  topBlock: {
    height: '10%',
    width: '90%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBlockTextStyle: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  content: {
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'teal',
  },
  contentText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'teal',
    marginVertical: 2,
  },
  scrollViewStyle: {
    paddingTop: 20,
    width: '90%',
  },
  scrollViewContentStyle: {
    justifyContent: 'center',
  },
  cardTextStyle: {
    color: 'teal',
    fontSize: 20,
    marginVertical: 5,
  },
  cardStyle: {
    width: '100%',
    backgroundColor: '#ADD8E6',
    marginVertical: 10,
    padding: 20,
  },
  sectionContainerStyle: {
    borderColor: 'teal',
    borderWidth: 1,
    marginVertical: 10,
  },
});
