import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ProductComponent = ({ productImage, productName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.productImage}>
        <Image source={productImage} style={styles.productImageStyle} />
      </View>
      <View style={styles.productNameStyle}>
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
