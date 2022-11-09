import { ScrollView, Text, View } from 'react-native';
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
        <ScrollView>
          <SettingOption title={'List'} />
          <SettingOption title={'Order History'} />
          <SettingOption title={'Saved Orders'} />
          <SettingOption title={'Settings'} />
          <SettingOption title={'Contact Us'}>
            <View style={layoutStyles.contactView}>
              <View style={layoutStyles.contactOptions}>
                <View style={componentStyles.helpButton}>
                  <Text style={componentStyles.helpOptionsText}>CALL</Text>
                </View>
                <View style={componentStyles.helpButton}>
                  <Text style={componentStyles.helpOptionsText}>EMAIL</Text>
                </View>
                <View style={componentStyles.helpButton}>
                  <Text style={componentStyles.helpOptionsText}>TEXT</Text>
                </View>
              </View>
              <View style={layoutStyles.contactDetails}>
                <View style={layoutStyles.addressView}>
                  <Text style={componentStyles.streetAddress}>
                    Street Address
                  </Text>
                  <Text style={componentStyles.streetAddress}>
                    600 N Country Line Rd. Elmhurst, IL 60126-2034
                  </Text>
                </View>
                <View style={layoutStyles.scheduleView}>
                  <Text style={componentStyles.schedule}>Will Call Hour</Text>
                  <Text style={componentStyles.schedule}>
                    Mon - Fri 7:00 am - 6:00 p.m
                  </Text>
                  <Text style={componentStyles.schedule}>
                    Sat 7:00 am - 2:00 p.m
                  </Text>
                  <Text style={componentStyles.schedule}>Sun Closed</Text>
                </View>
              </View>
            </View>
          </SettingOption>
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
