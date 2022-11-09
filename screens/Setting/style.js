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

    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  display: {
    flex: 9,
    backgroundColor: Colors.backgroundGray,
  },
  contactView: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20,
  },
  contactOptions: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contactDetails: {
    flex: 6,
  },
  addressView: {
    flex: 5,
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  scheduleView: {
    flex: 5,
    paddingVertical: 10,
  },
});

const componentStyles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.green,
  },
  cancelText: {
    color: Colors.textGray,
    fontSize: 18,
    fontWeight: '500',
  },
  logOutButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: Colors.borderGray,
    borderRadius: 7,
  },
  logOutText: {
    fontSize: 18,
    color: Colors.textGray,
    fontWeight: '500',
  },
  helpButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: Colors.borderGray,
    borderRadius: 7,
    margin: 10,
  },
  helpOptionsText: {
    fontSize: 18,
    color: Colors.textGray,
    fontWeight: '500',
  },
  streetAddress: {
    maxWidth: '80%',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  schedule: {
    fontSize: 15,
  },
});

export { layoutStyles, componentStyles };
