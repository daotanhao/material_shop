import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React from 'react';
import { layoutStyles, componentStyles } from './style';
import Icon from 'react-native-vector-icons/Fontisto';
import categoriesData from '../../assets/data/CategoriesData';
import ProductComponent from '../../components/ProductComponent';
import OrderOption from '../../components/OrderOption';

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
          <Text style={componentStyles.headerText}>YOUR ORDER</Text>
        </View>
        <View style={layoutStyles.display}>
          <View style={layoutStyles.action}>
            <View style={componentStyles.actionButton}>
              <Icon name="save" size={20} color="#7F7F7F" />
              <Text style={componentStyles.actionText}>Save</Text>
            </View>
            <View style={componentStyles.actionButton}>
              <Icon name="share" size={20} color="#7F7F7F" />
              <Text style={componentStyles.actionText}>Share</Text>
            </View>
            <View style={componentStyles.actionButton}>
              <Icon name="close-a" size={20} color="#7F7F7F" />
              <Text style={componentStyles.actionText}>Delete</Text>
            </View>
          </View>

          <View style={layoutStyles.orderDetails}>
            <ScrollView>
              <OrderOption />
              <OrderOption />
              <OrderOption />
            </ScrollView>
          </View>
          <View style={layoutStyles.confirmOrder}>
            <View style={layoutStyles.priceSection}>
              <Text style={componentStyles.price}>$5.00</Text>
            </View>
            <View style={layoutStyles.orderButtonSection}>
              <View style={componentStyles.orderButton}>
                <Icon name="locked" size={23} color="white" />
                <Text style={componentStyles.orderText}>PLACE ORDER</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default index;
