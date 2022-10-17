import React from 'react';
import { Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { layoutStyles, componentStyles } from './style';
import SearchBar from '../../components/SearchBar';
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
            <SearchBar />

            <FlatList
              data={categoriesData}
              renderItem={({ item }) => {
                return (
                  <ScrollView>
                    <ProductComponent productName={item.productName} />
                  </ScrollView>
                );
              }}
              keyExtractor={(item) => item.id}
              horizontal={false}
              numColumns={3}
            />
          </View>
          <View style={layoutStyles.footer}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
