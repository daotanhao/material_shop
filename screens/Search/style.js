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
  contactSection: {
    backgroundColor: Colors.backgroundGray,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  searchResultSection: {
    flex: 11,
    alignItems: 'center',
  },
});

const componentStyles = StyleSheet.create({
  cancelText: {
    color: Colors.textGray,
    fontSize: 18,
    fontWeight: '500',
  },
  contactText: {
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
});

export { layoutStyles, componentStyles };
