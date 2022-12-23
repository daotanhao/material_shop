import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { layoutStyles, componentStyles } from './style';
import Icon from 'react-native-vector-icons/Fontisto';
import OrderOption from '../../components/OrderOption';
import GoodsOrdered from '../../components/GoodsOrdered';
import { useSelector, useDispatch } from 'react-redux';
import CartSlice from './CartSlice';
import BottomPopup from '../../components/BottomPopup';
import Colors from '../../assets/Colors';

const index = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);
  const [visible, setVisible] = React.useState(false);

  const handleDeleteGoods = (id) => {
    dispatch(CartSlice.actions.deleteProduct(id));
  };

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
              {cartList.length !== 0 ? (
                <View style={layoutStyles.listOrder}>
                  {cartList.map((product) => {
                    return (
                      <GoodsOrdered
                        ordinalNumber={product.id}
                        productName={product.productName}
                        productImage={product.productImage}
                        handleDeleteGoods={() => handleDeleteGoods(product.id)}
                      />
                    );
                  })}
                </View>
              ) : (
                <View style={layoutStyles.listOrderBlank}>
                  <Text style={componentStyles.notificationText}>
                    There are no lines in your order.
                  </Text>
                </View>
              )}

              <View style={layoutStyles.listOrderMethods}>
                <OrderOption handleOrderOption={() => setVisible(true)} />
                <OrderOption />
                <OrderOption />
              </View>
            </ScrollView>
          </View>
          <View style={layoutStyles.confirmOrder}>
            <View style={layoutStyles.priceSection}>
              <Text style={componentStyles.priceText}>$5.00</Text>
            </View>
            <View style={layoutStyles.orderButtonSection}>
              <Pressable
                onPress={() => setVisible(true)}
                style={componentStyles.orderButton}
              >
                <Icon name="locked" size={23} color="white" />
                <Text style={componentStyles.orderText}>PLACE ORDER</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* modal list */}
        <BottomPopup visible={visible}>
          <View style={layoutStyles.modal}>
            <View style={layoutStyles.title}>
              <Text style={componentStyles.modalTitleText}>Invoice</Text>
              <Pressable onPress={() => setVisible(false)}>
                <Icon name="close-a" size={15} color={Colors.borderGray} />
              </Pressable>
            </View>
            <View style={layoutStyles.content}>
              <Icon
                name="radio-btn-passive"
                size={20}
                color={Colors.borderGray}
                style={{ marginRight: 5 }}
              />
              <Text style={componentStyles.actionText}>Address</Text>
            </View>
            <View style={layoutStyles.addItem}>
              <Icon
                name="plus-a"
                size={20}
                color={Colors.borderGray}
                style={{ marginRight: 5 }}
              />
              <Text style={componentStyles.actionText}>Add invoice</Text>
            </View>
            <View style={layoutStyles.modalButtonSection}>
              <Pressable
                onPress={() => setVisible(true)}
                style={componentStyles.saveButton}
              >
                <Text style={componentStyles.orderText}>SAVE</Text>
              </Pressable>
              <Pressable
                onPress={() => setVisible(false)}
                style={componentStyles.cancelButton}
              >
                <Text style={componentStyles.actionText}>CANCEL</Text>
              </Pressable>
            </View>
          </View>
        </BottomPopup>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default index;
