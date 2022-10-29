import { Text, View } from 'react-native';
import React from 'react';
import { layoutStyles, componentStyles } from './style';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import SettingOption from '../../components/SettingOption';

const index = () => {
  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.header}>
        <Text style={componentStyles.name}>Hao</Text>
        <View style={componentStyles.logOutButton}>
          <Text style={componentStyles.logOutText}>LOG OFF</Text>
        </View>
      </View>
      <View style={layoutStyles.display}>
        <SettingOption title={'List'} />
        <SettingOption title={'Order History'} />
        <SettingOption title={'Saved Orders'} />
        <SettingOption title={'Settings'}></SettingOption>
        <SettingOption title={'Contact Us'}></SettingOption>
      </View>
    </View>
  );
};

export default index;
