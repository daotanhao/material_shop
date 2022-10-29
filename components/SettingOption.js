import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/Colors';

const SettingOption = ({ title, children }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name="navigate-next" size={30} color={Colors.textGray} />
    </TouchableOpacity>
  );
};

export default SettingOption;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'red',
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: '4%',
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: Colors.borderGray,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});
