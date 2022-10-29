import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SearchBar = () => {
  return <View style={styles.container}></View>;
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
});
