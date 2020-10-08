import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  newsContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 12,
    textAlign: 'left',
    color: '#d3d3d3',
  },
  image: {
    width: '100%',
    height: 200,
  },
  newsContent: {
    padding: 10,
  },
});

const NewsItem = ({title, urlToImage, description}) => (
  <View style={styles.newsContainer}>
    <Image source={{uri: urlToImage}} style={styles.image} />
    <View style={styles.newsContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const HomeView = ({news, loading}) => {
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={news}
          renderItem={({item}) => <NewsItem {...item} />}
          keyExtractor={({title, publishedAt}) =>
            title + publishedAt + Math.random()
          }
        />
      )}
    </SafeAreaView>
  );
};

export default HomeView;
