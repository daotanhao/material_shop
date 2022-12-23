import { StyleSheet, StatusBar, Platform } from 'react-native';
import Colors from '../../assets/Colors';

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : StatusBar.currentHeight + 20,
  },
  header: {
    backgroundColor: Colors.backgroundGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    // marginTop: Platform.OS === 'android' ? 0 : 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  display: {
    flex: 9,
    backgroundColor: 'white',
  },
  action: {
    backgroundColor: Colors.backgroundGray,
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  orderDetails: {
    flex: 7.5,
    backgroundColor: 'white',
  },
  confirmOrder: {
    flex: 1.5,
    backgroundColor: Colors.backgroundGray,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  priceSection: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderButtonSection: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listOrder: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
  },
  listOrderBlank: {
    height: 150,
    marginTop: 20,
    marginLeft: 20,
  },
  listOrderMethods: {
    flex: 7,
  },
  modal: {
    backgroundColor: 'white',
    height: '50%',
    width: '100%',
    borderTopColor: Colors.yellow,
    borderTopWidth: 5,
  },
  title: {
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: Colors.backgroundGray,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: Colors.backgroundGray,
    flexDirection: 'row',
    height: '25%',
  },
  addItem: {
    flexDirection: 'row',
    height: '20%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: Colors.backgroundGray,
  },
  modalButtonSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

const componentStyles = StyleSheet.create({
  headerText: {
    color: Colors.green,
    fontSize: 26,
    fontWeight: 'bold',
  },
  actionText: {
    color: Colors.textGray,
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 5,
  },
  searchInput: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  actionButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  orderButton: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.green,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 7,
  },
  priceText: {
    alignSelf: 'center',
    fontSize: 20,
  },
  orderText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 10,
  },
  notificationText: {
    color: Colors.green,
    fontSize: 18,
    fontWeight: '700',
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: Colors.green,
    paddingVertical: 8,
    borderRadius: 5,
    width: '60%',
  },
  cancelButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 7,
    width: '30%',
  },
  modalTitleText: {
    fontSize: 20,
    color: Colors.green,
    fontWeight: 'bold',
  },
});

export { layoutStyles, componentStyles };
