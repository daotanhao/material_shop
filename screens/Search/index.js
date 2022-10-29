import { Text, View } from 'react-native';
import React from 'react';
import { layoutStyles, componentStyles } from './style';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';

const index = () => {
  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.header}>
        <SearchBar />
        <Text style={componentStyles.cancelText}>CANCEL</Text>
      </View>
      <View style={layoutStyles.display}>
        <View style={layoutStyles.contactSection}>
          <Icon name="message-square" size={20} color="#7F7F7F" />
          <Text style={componentStyles.contactText}>Contact Us</Text>
        </View>
        <View style={layoutStyles.searchResultSection}></View>
      </View>
    </View>
  );
};

export default index;
