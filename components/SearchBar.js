import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Search = () => {
  return (
    <View style={styles.container}>
      <Icon name="search1" size={20} color="#9C9C9D" />
      <Text style={styles.searchText}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
    borderRadius: 3,
    width: '80%',
    backgroundColor: '#F3F3F3',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  searchText: {
    fontSize: 18,
    marginLeft: 5,
    color: '#B5B5B6',
  },
});

export default Search;
