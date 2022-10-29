import React from 'react';
import { Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { layoutStyles, componentStyles } from './style';
import SearchButton from '../../components/SearchButton';
import ProductComponent from '../../components/ProductComponent';
import categoriesData from '../../assets/data/CategoriesData';

const index = () => {
  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.header}>
        <Text style={componentStyles.appName}>Material Shop</Text>
      </View>
      <View style={layoutStyles.display}>
        <ScrollView>
          <View style={layoutStyles.listMaterial}>
            <SearchButton />

            <FlatList
              data={categoriesData}
              renderItem={({ item }) => {
                return (
                  <ScrollView>
                    <ProductComponent
                      productImage={item.productImage}
                      productName={item.productName}
                    />
                  </ScrollView>
                );
              }}
              keyExtractor={(item) => item.id}
              horizontal={false}
              numColumns={3}
            />
          </View>
          <View style={layoutStyles.footer}>
            <View style={layoutStyles.helpSection}>
              <View style={layoutStyles.helpText}>
                <Text style={componentStyles.needHelpText}>Need help?</Text>
              </View>
              <View style={layoutStyles.helpOptions}>
                <View style={componentStyles.helpButton}>
                  <Text style={componentStyles.helpOptionsText}>TEXT</Text>
                </View>
                <View style={componentStyles.helpButton}>
                  <Text style={componentStyles.helpOptionsText}>EMAIL</Text>
                </View>
                <View style={componentStyles.helpButton}>
                  <Text style={componentStyles.helpOptionsText}>CALL</Text>
                </View>
              </View>
            </View>
            <View style={layoutStyles.policySection}>
              <Text style={componentStyles.policyText}>
                By using this app, you agree to our Terms and Conditions and
                Privacy Policy
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
