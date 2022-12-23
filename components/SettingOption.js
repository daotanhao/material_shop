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
import { useNavigation } from '@react-navigation/native';

const SettingOption = ({ title, children, screen }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(screen)}
    >
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
    paddingVertical: '3%',
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
