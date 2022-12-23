import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import { layoutStyles, componentStyles } from './style';
import Icon from 'react-native-vector-icons/Feather';
import categoriesData from '../../assets/data/CategoriesData';
import GoodsComponent from '../../components/GoodsComponent';

const index = () => {
  const [searchText, setSearchText] = React.useState();

  const filter = searchText
    ? categoriesData.filter((item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase())
      )
    : null;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={layoutStyles.container}>
        <View style={layoutStyles.header}>
          {/* <SearchBar /> */}
          <TextInput
            style={componentStyles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />

          <Text style={componentStyles.cancelText}>CANCEL</Text>
        </View>
        <View style={layoutStyles.display}>
          <View style={layoutStyles.contactSection}>
            <Icon name="message-square" size={20} color="#7F7F7F" />
            <Text style={componentStyles.contactText}>Contact Us</Text>
          </View>
          <View style={layoutStyles.searchResultSection}>
            <FlatList
              data={filter}
              renderItem={({ item }) => {
                return (
                  <GoodsComponent
                    productImage={item.productImage}
                    productName={item.productName}
                  />
                );
              }}
              horizontal={false}
              numColumns={3}
              keyExtractor={(item) => item.id}
              keyboardDismissMode="on-drag"
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default index;
