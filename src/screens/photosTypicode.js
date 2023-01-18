import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import photosData from '../../constants/photos.json';
import SearchSVG from '../assets/SearchSVG';

const {width, height} = Dimensions.get('window');

const PhotosScreen = ({navigation, route}) => {
  const [switcher, setSwitcher] = useState(false);
  const [filter, setFilter] = useState(null);

  const filterData = () => {
    if (filter) {
      const filteredData = photosData.filter(function (item) {
        return item.albumId == filter;
      });
      return filteredData;
    } else {
      return photosData;
    }
  };

  const {logged} = route.params || false;

  const Item = ({item}) => {
    const {title, thumbnailUrl, url, albumId} = item;

    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.insideBlockDirection}
          onPress={() => setSwitcher(!switcher)}>
          {switcher ? null : (
            <Text style={styles.titleAlbum}>Album # {albumId}</Text>
          )}
          <Image
            style={switcher ? styles.imageStyle : styles.imageStyleThumbnail}
            source={{uri: switcher ? url : thumbnailUrl}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {logged ? (
        <>
          <View style={styles.searchBlock}>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFilter}
              value={filter}
              style={styles.textInputStyle}
              placeholder="Enter Album number"
            />
            <View style={styles.searchIcon}>
              <SearchSVG />
            </View>
          </View>
          <FlatList
            data={filterData()}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </>
      ) : (
        <>
          <Text style={styles.unavailableText}>
            Content unavailable for quests.
          </Text>
          <Text style={styles.unavailableText}>Login to see.</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('StartScreen')}
            style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  searchBlock: {
    height: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'teal',
    marginBottom: 20,
    flexDirection: 'row',
  },
  textInputStyle: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 20,
  },
  searchIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 90,
    marginLeft: 20,
  },
  unavailableText: {
    fontSize: 20,
    color: 'teal',
    marginVertical: 5,
  },
  loginButton: {
    width: 100,
    height: 50,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 5,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'teal',
  },
  imageStyleThumbnail: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  imageStyle: {
    width: width,
    height: height,
    resizeMode: 'stretch',
    padding: 50,
  },
  titleAlbum: {
    fontSize: 20,
    color: 'teal',
    marginRight: 30,
  },
  insideBlockDirection: {
    flexDirection: 'row',
  },
});
