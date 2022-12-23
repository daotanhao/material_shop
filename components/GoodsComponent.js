import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartSlice from '../screens/Order/CartSlice';

const GoodsComponent = ({ productImage, productName }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);
  const handleBuying = () => {
    dispatch(
      CartSlice.actions.addProduct({
        id: cartList.length + 1,
        productName: productName,
        productImage: productImage,
      })
    );
  };
  return (
    <Pressable style={styles.container} onPress={handleBuying}>
      <View style={styles.productImage}>
        <Image source={productImage} style={styles.productImageStyle} />
      </View>
      <View style={styles.productNameStyle}>
        <Text style={styles.productName}>{productName}</Text>
      </View>
    </Pressable>
  );
};

export default GoodsComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    width: 120,
  },
  productImage: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    marginTop: 5,
    maxWidth: '80%',
    fontSize: 16,
    textAlign: 'center',
    color: '#343434',
  },
  productNameStyle: {
    width: 100,

    alignItems: 'center',
  },
  productImageStyle: {
    height: 90,
    width: 90,
  },
});
