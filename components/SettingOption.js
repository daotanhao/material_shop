import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/Colors';

const SettingOption = ({ title, children }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Icon name="navigate-next" size={30} color={Colors.textGray} />
      </View>
      <View>{children}</View>
    </Pressable>
  );
};

export default SettingOption;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: '4%',
    marginTop: '6%',
    borderTopWidth: 0.5,
    borderTopColor: Colors.borderGray,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
  },
});
