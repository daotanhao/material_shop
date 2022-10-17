import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProductComponent = ({ productImage, productName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.productImage}></View>
      <View
        style={{ width: 100, alignContent: 'center', alignItems: 'center' }}
      >
        <Text style={styles.productName}>{productName}</Text>
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
  },
  productImage: {
    height: 100,
    width: 100,
    borderWidth: 1,
  },
  productName: {
    marginTop: 5,
    maxWidth: '80%',
    fontSize: 14,
    textAlign: 'center',
  },
});
