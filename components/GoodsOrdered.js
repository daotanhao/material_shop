import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../assets/Colors';
import Icon from 'react-native-vector-icons/EvilIcons';

const GoodsOrdered = ({
  ordinalNumber,
  productName,
  productImage,
  handleDeleteGoods,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ordinalNumber}>
        <Text style={styles.ordinalNumberText}>{ordinalNumber}</Text>
      </View>

      <View style={styles.details}>
        <Image
          source={productImage}
          style={{ height: 70, width: 70, marginRight: 10 }}
        />
        <View>
          <Text style={styles.name}>{productName}</Text>
          <Text style={styles.size}>6'' x 50'' Roll, 0.0005'' Thick</Text>
          <Text style={styles.code}>9502K56</Text>
        </View>
      </View>
      <View style={styles.quantityAndPrice}>
        <View style={styles.quantity}>
          <Icon name="minus" size={35} color={Colors.borderGray} />
          <View style={styles.quantityButton}>
            <Text style={styles.quantityText}>4</Text>
          </View>
          <Icon name="plus" size={35} color={Colors.borderGray} />
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>$5.0</Text>
        </View>
      </View>
      <View style={styles.reference}>
        <TextInput placeholder="Reference"></TextInput>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={handleDeleteGoods}>
        <Icon name="close" size={20} color={Colors.textGray} />
      </TouchableOpacity>
    </View>
  );
};

export default GoodsOrdered;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 250,
    borderWidth: 0.8,
    borderColor: Colors.borderGray,
    borderRadius: 7,
    marginBottom: 40,
  },
  ordinalNumber: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    top: -12,
    left: -12,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: Colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    top: -12,
    right: -12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 5,
    borderBottomWidth: 0.8,
    borderColor: Colors.borderGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  quantityAndPrice: {
    flex: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reference: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textGray,
  },
  size: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textGray,
  },
  code: {
    fontSize: 14,
    color: Colors.textGray,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 6,
  },
  quantityButton: {
    marginHorizontal: 20,
    width: 45,
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 4,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  referenceText: {
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.borderGray,
    fontSize: 17,
    paddingBottom: 5,
  },
  ordinalNumberText: { fontSize: 17 },
});
