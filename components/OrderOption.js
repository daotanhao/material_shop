import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../assets/Colors';

const OrderOption = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>
      <Text style={styles.detail}>Please select...</Text>
    </Pressable>
  );
};

export default OrderOption;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 70,
    padding: 8,
    justifyContent: 'space-between',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.yellow,
  },
  title: {
    fontSize: 15,
    color: Colors.textGray,
    fontWeight: '400',
  },
  detail: {
    fontSize: 19,
    fontWeight: '400',
  },
});
